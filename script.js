// Theme handling 
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
});

// Initialize theme
setTheme(currentTheme); 

class CodeEditor {
    constructor(questionCard) {
        this.card = questionCard;
        this.tabs = this.card.querySelectorAll('.editor-tab');
        this.textareas = this.card.querySelectorAll('.code-textarea');
        this.runBtn = this.card.querySelector('.run-btn');
        this.resetBtn = this.card.querySelector('.reset-btn');
        this.preview = this.card.querySelector('.preview-frame');
        
        this.initialCode = {
            html: '',
            css: '',
            js: ''
        };
        
        // Initialize the preview iframe
        this.initializePreview();
        this.setupEventListeners();
    }

    initializePreview() {
        if (!this.preview) return;
        
        // Create a new blank document in the iframe
        const previewDocument = this.preview.contentDocument;
        if (previewDocument) {
            previewDocument.open();
            previewDocument.write('<!DOCTYPE html><html><head></head><body></body></html>');
            previewDocument.close();
        }
    }

    setupEventListeners() {
        // Tab switching
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
        });

        // Run code button
        this.runBtn.addEventListener('click', () => this.runCode());

        // Reset code
        this.resetBtn.addEventListener('click', () => this.resetCode());
        
        // Restore live update functionality
        this.textareas.forEach(textarea => {
            textarea.addEventListener('input', () => this.runCode());
        });
    }

    switchTab(tabName) {
        this.tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        this.textareas.forEach(textarea => {
            textarea.style.display = 
                textarea.classList.contains(`${tabName}-code`) ? 'block' : 'none';
        });
    }

    setInitialCode(html, css, js) {
        this.initialCode = { html, css, js };
        const htmlTextarea = this.card.querySelector('.html-code');
        const cssTextarea = this.card.querySelector('.css-code');
        const jsTextarea = this.card.querySelector('.js-code');

        if (htmlTextarea) htmlTextarea.value = html;
        if (cssTextarea) cssTextarea.value = css;
        if (jsTextarea) jsTextarea.value = js;
        
        // Run code immediately after setting initial values
        setTimeout(() => this.runCode(), 100); // Small delay to ensure iframe is ready
    }

    runCode() {
        if (!this.preview) return;
        const html = this.card.querySelector('.html-code')?.value || '';
        const css = this.card.querySelector('.css-code')?.value || '';
        const js = this.card.querySelector('.js-code')?.value || '';

        const combinedCode = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
        `;

        // Update preview
        try {
            const previewDocument = this.preview.contentDocument;
            if (previewDocument) {
                previewDocument.open();
                previewDocument.write(combinedCode);
                previewDocument.close();
            }
        } catch (error) {
            console.error('Error updating preview:', error);
        }
    }

    resetCode() {
        Object.entries(this.initialCode).forEach(([type, code]) => {
            const textarea = this.card.querySelector(`.${type}-code`);
            if(textarea) textarea.value = code;
        });
        this.runCode();
    }
}

// Question rendering with escaped HTML
// Theme handling remains the same...

// Question rendering with error handling
function renderQuestion(question) {
    if (!question) return;
    
    const template = document.getElementById('questionTemplate');
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.topic-tag').textContent = question.topic || '';
    clone.querySelector('.question-title').textContent = `Q${question.id}: ${question.question}`;
    
    const answerSection = clone.querySelector('.answer-section');
    const explanationSection = clone.querySelector('.explanation-section');
    
    // Enhanced code formatting function
    const formatCode = (text) => {
        if (!text) return "";
        
        text = text.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;');
        
        text = text.replace(/`(.*?)`/g, (match, code) => {
            return `<code class="code-inline">${code}</code>`;
        });
        
        text = text.replace(/```(.*?)```/gs, (match, code) => {
            code = code.replace(/^\n/, '');
            const lines = code.split('\n');
            const indent = lines[0].match(/^\s*/)[0];
            code = lines.map(line => line.replace(new RegExp(`^${indent}`), '')).join('\n');
            
            return `<pre><code class="code-block">${code}</code></pre>`;
        });
        
        return text;
    };

    answerSection.innerHTML = `<strong>Answer:</strong> ${formatCode(question.answer)}`;
    explanationSection.innerHTML = `<strong>Explanation:</strong> ${formatCode(question.explanation)}`;

    const card = clone.querySelector('.question-card');
    const codeEditorDiv = card.querySelector('.code-editor');
    
    if (question.codeExample && question.codeExample !== "None") {
        codeEditorDiv.style.display = 'grid';
        const codeEditor = new CodeEditor(card);
        const escapedExample = question.codeExample
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        codeEditor.setInitialCode(escapedExample, '', '');
    }
    
    document.getElementById('question-container').appendChild(clone);
}

// Level selection with error handling
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const level = btn.dataset.level;
        
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = '';
        
        if (!questions[level] || questions[level].length === 0) {
            questionContainer.innerHTML = `
                <div class="question-card">
                    <p>No questions available for ${level} level yet.</p>
                </div>`;
            return;
        }
        
        questions[level].forEach(renderQuestion);
    });
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    if (questions.Beginner && questions.Beginner.length > 0) {
        questions.Beginner.forEach(renderQuestion);
    }
});