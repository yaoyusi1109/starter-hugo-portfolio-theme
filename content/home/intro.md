---
# Use the Intro widget of the Blog template
widget: about.avatar

# This file represents a page section.
headless: true

# Order that this section will appear in.
weight: 10

author: admin
#design:
#  background:
#    color: '#090a0b'
#    text_color_light: true
#    video:
#      path:  # enter filename of a video in the assets/media
#  css_class: fullscreen
---

👋 Hi, there! I'm **Yusi (Roy) Yao**. A penchant for quantitative finance.
{style="font-size: 1.2rem; background: #FFB76B; background: linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"}

<div class="intro-paragraph">
  <p>I'm a Bachelor of Science student in Statistics with a Data Science option at Virginia Tech, graduating in December 2025. I began my undergraduate studies at the College of the Holy Cross before transferring to Virginia Tech after relocating to Virginia, where I have focused on <strong>Bayesian statistics</strong>, <strong>time series</strong>, <strong>stochastic modeling</strong>, and <strong>machine learning</strong>, with strong experience in Python, R, and web development.</p>
  
  <p>I am currently a Research Assistant in the <strong>Quantitative Ecology and Disease (QED) Lab</strong>, where I build trait-based Bayesian models to study vector-borne disease transmission and develop open-source tutorials for the VectorByte initiative. I also worked in the <strong>PRIME Lab</strong>, where I integrated real-time code evaluation systems and improved user experience for educational AI platforms. Beyond research, I have gained industry experience through roles at <strong>Citizens Bank</strong> (UX Research Intern), <strong>Ernst & Young</strong> (Strategy Intern), <strong>Hansight Tech</strong> (PM Intern), and in crypto-trading automation projects, where I applied both analytical and software development skills to practical challenges.</p>
  
  <p>Outside of academics and professional work, I enjoy <strong>offshore fishing</strong>, <strong>traveling</strong>, <strong>camping</strong>, and <strong>cooking</strong> — hobbies that keep me curious and balanced. You can explore more of my work and projects on my portfolio and GitHub.</p>
</div>

Check out my [resumé](/uploads/resume.pdf) and portfolio below 😍

<style>
.intro-paragraph {
  margin: 2rem 0;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.intro-paragraph p {
  margin-bottom: 1.5rem;
  text-align: justify;
  font-size: 1.05rem;
}

.intro-paragraph strong {
  color: #FF7C00;
  font-weight: 600;
  transition: color 0.3s ease;
}

.intro-paragraph strong:hover {
  color: #FF5A00;
  text-shadow: 0 0 8px rgba(255, 124, 0, 0.3);
}

.intro-paragraph p:first-child {
  font-size: 1.1rem;
  font-weight: 500;
}

.intro-paragraph p:last-of-type {
  margin-bottom: 0;
  font-style: italic;
  color: #666;
}

/* Responsive design */
@media (max-width: 768px) {
  .intro-paragraph {
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
  
  .intro-paragraph p {
    font-size: 1rem;
    text-align: left;
  }
  
  .intro-paragraph p:first-child {
    font-size: 1.05rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .intro-paragraph {
    color: #e1e5e9;
  }
  
  .intro-paragraph strong {
    color: #FFB76B;
  }
  
  .intro-paragraph strong:hover {
    color: #FFA73D;
    text-shadow: 0 0 8px rgba(255, 183, 107, 0.4);
  }
  
  .intro-paragraph p:last-of-type {
    color: #adb5bd;
  }
}
</style>
