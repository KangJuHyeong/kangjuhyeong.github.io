# GitHub Pages Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a one-page GitHub Pages portfolio for backend developer 강주형.

**Architecture:** A dependency-free static site places content in semantic HTML and presentation in one responsive stylesheet. GitHub Actions uploads the repository root as the Pages artifact when `main` changes.

**Tech Stack:** HTML5, CSS3, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-08-portfolio-pages-design.md`

## Global Constraints

- Use Korean as the main page language and use only verified project claims in the design spec.
- Do not include passwords, API keys, personal phone numbers, or unverified performance figures in the repository.
- Keep external links to `https://github.com/KangJuHyeong`, `https://github.com/KangJuHyeong/prototype`, and `https://github.com/KangJuHyeong/reserva`.
- Keep the site dependency-free and compatible with GitHub Pages static hosting.
- Make keyboard focus visible and retain readable layout at 360px width.

---

### Task 1: Semantic portfolio page

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: verified project copy from the design spec.
- Produces: `index.html` with `#about`, `#skills`, `#projects`, and `#contact`.

- [ ] **Step 1: Implement the semantic document**

```html
<main>
  <section id="about"><h1>강주형</h1><p>신입 백엔드 개발자</p></section>
  <section id="skills"><h2>핵심 기술</h2></section>
  <section id="projects"><h2>프로젝트</h2></section>
</main>
<footer id="contact">강주형 · Backend Developer</footer>
```

- [ ] **Step 2: Open the page in a browser and verify the two project links**

Expected: Campuslink and Reserva project cards are visible and their repository links point to the verified GitHub URLs.

- [ ] **Step 3: Commit the content baseline**

```bash
git add index.html
git commit -m "feat: add portfolio content"
```

### Task 2: Responsive visual system and resume download

**Files:**
- Create: `assets/styles.css`
- Create: `assets/resume.pdf`
- Modify: `index.html`

**Interfaces:**
- Consumes: HTML section IDs from Task 1 and the generated résumé PDF.
- Produces: `assets/styles.css`, a valid local resume link, cards that stack below 720px.

- [ ] **Step 1: Add the visual system and resume link**

```css
.project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
a:focus-visible { outline: 3px solid #f4b860; outline-offset: 3px; }
@media (max-width: 720px) { .project-grid { grid-template-columns: 1fr; } }
```

```html
<a class="button primary" href="assets/resume.pdf" download>이력서 PDF 다운로드</a>
```

- [ ] **Step 2: Copy the reviewed résumé PDF and preview at desktop and mobile widths**

Expected: the download button opens the PDF and no content is clipped at either viewport width.

- [ ] **Step 3: Commit the visual layer**

```bash
git add index.html assets/styles.css assets/resume.pdf
git commit -m "feat: style portfolio and add resume"
```

### Task 3: GitHub Pages deployment workflow

**Files:**
- Create: `.github/workflows/pages.yml`

**Interfaces:**
- Consumes: static site files at repository root.
- Produces: a workflow triggered on `main` push that configures Pages, uploads `.` and deploys the artifact.

- [ ] **Step 1: Add the Pages workflow**

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Validate the workflow structure and commit the deployment configuration**

Expected: GitHub Actions recognizes the workflow after the first push.

```bash
git add .github/workflows/pages.yml
git commit -m "ci: deploy portfolio to github pages"
```

### Task 4: Publish and verify

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: verified local static site and a public GitHub repository named `kangjuhyeong.github.io`.
- Produces: public site at `https://kangjuhyeong.github.io` and a short README with local verification instructions.

- [ ] **Step 1: Add the README with the public URL and verification command**

```markdown
# 강주형 포트폴리오

Public site: https://kangjuhyeong.github.io

Verify content: open `index.html` in a browser
```

- [ ] **Step 2: Review the page and the PDF download before publishing**

Expected: project descriptions, project links, and the PDF file match the reviewed résumé.

- [ ] **Step 3: Create the public repository and push `main`**

Run: `git remote add origin https://github.com/KangJuHyeong/kangjuhyeong.github.io.git && git push -u origin main`

Expected: remote `main` receives all commits.

- [ ] **Step 4: Set the repository Pages source to GitHub Actions and confirm deployment**

Expected: the Actions workflow succeeds and the public URL returns the portfolio page.

- [ ] **Step 5: Commit the README**

```bash
git add README.md
git commit -m "docs: add portfolio usage"
```
