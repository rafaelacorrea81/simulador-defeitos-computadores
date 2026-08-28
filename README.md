# Simulador de Diagnóstico de Defeitos de Computadores

Este repositório contém um **simulador interativo de diagnóstico de defeitos de computador**, desenvolvido para uso didático em aulas técnicas de manutenção de computadores e redes.

---

## 🎯 Sobre o Projeto

O simulador apresenta cenários práticos e casos de diagnóstico para que os alunos exercitem a identificação de falhas de hardware, software, energia e conectividade.

O projeto inclui duas interfaces principais:
* **Página do Aluno (`index.html`)**: Interface interativa para navegação e resolução dos casos de estudo, com funcionalidade de geração de relatório CSV e envio de respostas para o professor.
* **Modo Professor (`professor.html`)**: Interface restrita com gabarito detalhado e sugestões de condução pedagógica da aula.

---

## 🚀 Como Executar Localmente

Como se trata de um site estático (HTML5, CSS3 e JavaScript puro sem dependências ou processo de build):

1. Clone ou baixe este repositório para o seu computador.
2. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador web preferido (Chrome, Firefox, Edge, Safari, etc.).
3. Para acessar a página de apoio pedagógico, abra o arquivo `professor.html` no navegador.

---

## 📊 Integração com Planilha do Google

As respostas dos alunos podem ser enviadas diretamente para a planilha da disciplina:

* **Planilha da Turma**: [Google Sheets - Respostas dos Alunos](https://docs.google.com/spreadsheets/d/1mk4jfrlVeR5RFvkgE9FiUhxMHqaK3Exc7bvnAxw7CuM/edit?usp=sharing)

### Como configurar o Google Apps Script (Web App):

1. Abra a [Planilha no Google Sheets](https://docs.google.com/spreadsheets/d/1mk4jfrlVeR5RFvkgE9FiUhxMHqaK3Exc7bvnAxw7CuM/edit?usp=sharing).
2. Vá no menu **Extensões** > **Apps Script**.
3. Apague todo o conteúdo e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Cria o cabeçalho se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Aluno", "Código do Caso", "Nível", 
        "Categoria", "Pergunta 1", "Pergunta 2", "Pergunta 3", 
        "Peça Apontada", "Status"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1e293b");
      headerRange.setFontColor("#ffffff");
    }
    
    var timestamp = data.timestamp || new Date().toLocaleString("pt-BR");
    var aluno = data.aluno || "Anônimo";
    var casos = data.casos || [];
    
    casos.forEach(function(c) {
      sheet.appendRow([
        timestamp,
        aluno,
        c.codigo || "",
        c.nivel || "",
        c.categoria || "",
        c.pergunta1 || "",
        c.pergunta2 || "",
        c.pergunta3 || "",
        c.peca || "",
        c.status || ""
      ]);
    });
    
    return ContentService.createTextOutput("Sucesso").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Erro: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
```

4. Clique no botão **Implantar** (Deploy) > **Nova implantação**.
5. Selecione o tipo **Web app** (App da Web).
6. Altere **Quem pode acessar** para **Qualquer pessoa** (Anyone).
7. Clique em **Implantar**, autorize os acessos e copie a **URL do Web App** gerada.
8. Cole a URL gerada na variável `SHEETS_ENDPOINT` no arquivo `index.html`.

---

## 🌐 Publicação via GitHub Pages

Este projeto está configurado para ser hospedado diretamente pelo **GitHub Pages**:

* O site é publicado automaticamente a partir da branch `main` e servido diretamente do diretório raiz (`/`).
* **URL do Aluno**: `https://rafaelacorrea81.github.io/simulador-defeitos-computadores/`
* **URL do Professor**: `https://rafaelacorrea81.github.io/simulador-defeitos-computadores/professor.html`

---

## 📁 Estrutura de Arquivos

* `index.html` — Página principal do simulador (visão do aluno).
* `professor.html` — Página com gabarito e orientações didáticas (visão do professor).
* `estilos.css` — Estilização e design responsivo da aplicação.
* `casos.js` — Base de dados com os casos de estudo e lógica dos cenários.
* `.nojekyll` — Garante o servimento direto dos arquivos estáticos sem processamento Jekyll.