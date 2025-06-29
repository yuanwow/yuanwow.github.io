---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<head>
    <link rel="stylesheet" href="bootstrap.min.css">
    <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101296995);</script>
    <script async src="//static.getclicky.com/js"></script>    
    <style>
	:root {
	  --theme-color: #EC707D; /* 确保这是一个有效的颜色 */
	  --venue-bg-color: rgb(108, 149, 181);
	}
	    
	g {
		color: #aaaaaa
	}

	 pt {
		/* color:chocolate; */
		/* color:#c50e0e; */
		color: var(--title-color);
		/* color:tomato; */
		font-weight: 500;
	}

	 em {
		font-style: italic;
	}

	 venue {
		/* background-color:royalblue; */
		/* background-color:rgb(80, 80, 80); */
		/* background-color: #d1a7a7; */
		/* background-color: #ca3737; */
		background-color: #EC707D;
		/* background-color: rgb(217, 229, 244); */
		/* color: rgb(16, 68, 158); */
		color: #ffffff;
		/* font-family: 'Nunito'; */
		font-size: 70%;
		font-weight: bold;
		line-height: 170%;
		/* padding-left: 1em;
		padding-right: 1em; */
		margin-right: 0.25em;
		width: 5em;
		display:inline-block;
		text-align: center;
		/* border-color: #ffffff; */
		border-width: 0px;
		border-style: none;
		border-radius: 0.1rem;
		/* -webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
		box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); */
		/* border-radius: 4px; */
		/* -webkit-box-shadow:inset 0px 0px 0px 0.25em #fff;
	    -moz-box-shadow:inset 0px 0px 0px 0.25em #fff;
	    box-shadow:inset 0px 0px 0px 0.25em #fff; */
		/* border: #ffffff; */
		height: 1.7em;
		vertical-align:text-bottom;
		margin-bottom: 0.1em;
		/* letter-spacing: 0.1cap; */
	}

	 venue1 {
		/* background-color:royalblue; */
		/* background-color:rgb(80, 80, 80); */
		/* background-color: #d1a7a7; */
		/* background-color: #ca3737; */
		background-color: var(--venue-bg-color);
		/* background-color: rgb(217, 229, 244); */
		/* color: rgb(16, 68, 158); */
		color: #ffffff;
		/* font-family: 'Nunito'; */
		font-size: 70%;
		font-weight: bold;
		line-height: 170%;
		/* padding-left: 1em;
		padding-right: 1em; */
		margin-right: 0.25em;
		width: 5em;
		display:inline-block;
		text-align: center;
		/* border-color: #ffffff; */
		border-width: 0px;
		border-style: none;
		border-radius: 0.1rem;
		/* -webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
		box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); */
		/* border-radius: 4px; */
		/* -webkit-box-shadow:inset 0px 0px 0px 0.25em #fff;
	    -moz-box-shadow:inset 0px 0px 0px 0.25em #fff;
	    box-shadow:inset 0px 0px 0px 0.25em #fff; */
		/* border: #ffffff; */
		height: 1.7em;
		vertical-align:text-bottom;
		margin-bottom: 0.1em;
		/* letter-spacing: 0.1cap; */
	}
 
	.filter {
		color: var(--color);
		background-color: #fff;
		border: var(--border);
		border-style: solid;
		border-radius: 0.2rem;
		border-width: 1.5px;
		transition: all .3s;
		touch-action: manipulation;
		font-size: 80%;
		line-height: 120%;
		/* width: 5em; */
	}
	
	.filter:focus {
		color: #171e29;
	}
	  
	  .filter:hover {
		border-color: var(--theme-color);
		color: white;
		background-color: var(--theme-color);
		fill: var(--theme-color);
	  }
	  
	  .filter:active {
		border-color: var(--theme-color);
		color: var(--theme-color);
		fill: var(--theme-color);
	  }
	  
	.button-59 {
	  align-items: center;
	  background-color: #fff;
	  border: 1px solid #dadada;
	  box-sizing: border-box;
	  color: #000000;
	  cursor: pointer;
	  display: inline-block; /* 修改为 inline-block */
	  fill: #000;
	  font-family: 'Nunito';
	  font-size: 0.7rem;
	  height: 1.1rem;
	  justify-content: center;
	  line-height: 1.3;
	  min-width: 60px; /* 增加最小宽度 */
	  outline: 0;
	  padding: 0 10px; /* 增加左右内边距 */
	  text-align: center;
	  text-decoration: none;
	  transition: color .3s, background-color .3s, border-color .3s; /* 限制过渡范围 */
	  user-select: none;
	  -webkit-user-select: none;
	  touch-action: manipulation;
	  margin-right: 0.2em;
	  border-radius: 0.2rem;
	}
	
	.button-59:hover {
	  border-color: var(--theme-color);
	  color: #fff;
	  fill: var(--theme-color);
	  background-color: var(--theme-color);
	  text-decoration: none;
	}
	
	.button-59:active {
	  border-color: var(--theme-color);
	  color: #fff;
	  fill: var(--theme-color);
	  background-color: var(--theme-color);
	}
	
	@media (min-width: 768px) {
	  .button-59 {
	    padding-left: 5px;
	    padding-right: 5px;
	  }
	}
    </style>
    <script>
        try{
            if (window.screen.width < 700) {
                setActiveStyleSheet("jemdoc_mobile.css"); 
            } 
            else if(/iPad/i.test(navigator.userAgent)){ 
                setActiveStyleSheet("jemdoc.css"); 
            } 
            else{
                setActiveStyleSheet("jemdoc.css"); 
            } 
        } 
        catch(e){} 
	
        function setActiveStyleSheet(filename){
            document.write("<link href="+filename+" rel=stylesheet>");
        }

        function checkFilter(type, li) {
            if (type == "All") {
                return true
            }
            else if (type == "First-authored") {
                res = li.getAttribute("first_authored")
                return res
            }
            else {
                cate = li.getAttribute("category")
                if (!cate) {
                    return false
                }
                items = cate.split(',')
                for (j = 0; j < items.length; j++) {
                    console.log(items[j])
                    if (type.toUpperCase() == items[j].toUpperCase()) {
                        return true
                    }
                }
                return false
            }
        }

        function filterPub(type) {
            ul = document.getElementById("publications")
            li = ul.getElementsByTagName("li")
            for (i = 0; i < li.length; i++) {
                if (!checkFilter(type, li[i])) {
                    li[i].style.display = "none";
                }
                else {
                    li[i].style.display = ""
                }
            }
            // change the button color
            bts = document.getElementsByClassName("filter")
            for (k = 0; k < bts.length; k++) {
                if (bts[k].textContent == type) {
                    bts[k].style.setProperty("--color", "#000")
                    bts[k].style.setProperty("--border", "#000")
                    // bts[k].style.color = "#000"
                }
                else {
                    bts[k].style.setProperty("--color", "#a0a0a0")
                    bts[k].style.setProperty("--border", "#d3d3d3")
                    // bts[k].style.color = "#a0a0a0"
                }
            }
        }

    </script>

    <script>
        // import data from './bibtex.json' assert { type: 'json' };

        function getBibTex(key) {
            prompt("You can copy the text manually.", data[key]);
        }
    </script>
</head>

<span class='anchor' id='about-me'></span>



# 🍾 Biography
Hi! I’m a third-year Master's student in the [School of Artificial Intelligence](https://sai.sysu.edu.cn/) at Sun Yat-sen University (SYSU), supervised by [Prof. Xuehe Wang](https://sai.sysu.edu.cn/teacher/234). Previously, I obtained my B.Eng. in Mechanical Design, Manufacturing and Automation from the University of Electronic Science and Technology of China (UESTC) in 2022.

My research interests include Distributed Optimization (e.g., Federated Learning), Game Theory, and Large Language Models (LLMs).

Here is [my girlfriend's homepage](https://cc-lynn.github.io/ChenchenLin.github.io/), and she is also doing some awesome work on FL and LLMs!


# 🔥 News


<div id="news" class="w3-container w3-margin-top-2 w3-cursive">
	  <div style="height:200px; width:100%; overflow:auto;">
	    <h4>📌 We have several academic intern positions at HMI Lab (Peking University). We actively work on AI4Science and Embodied AI. If you like what we do, don't hesitate to contact me.</h4>
	    <p>[06.2025] 🎉🎉 Honored to be selected as Excellent Graduate in SYSU (<strong>Top 5%</strong>).</p>
	    <p>[03.2025] 🎉🎉 One paper <strong>FedPCS</strong> was accepted by <strong>ToN'25</strong> (CCF-A) as first author.</p>
	    <p>[05.2024] 🎉🎉 One paper <strong>FedEnt</strong> was accepted by <strong>TMC'24</strong> (CCF-A) as co-first author.</p>
	    <p>[03.2024] 🎉🎉 One paper <strong>QI-DPFL</strong> was accepted by <strong>IJCNN'24 Oral</strong> as first author! See you in Yokohama!</p>
	    <p>[10.2023] 🎉🎉 One paper was accepted by <strong>QSHINE'23</strong> and received <strong>Best Papar Award<strong>! See you in Shenzhen!</p>
	    <p>[05.2025] 📕 I am selected for the “<strong>Endeavor Scholarship — Integrated Circuit Talent Development Program</strong>” of China Education Development Foundation (93 recipients nationwide).</p>
	    <p>[05.2025] 🎉 One paper <strong>INIF</strong> was accepted by <strong>Nature Computational Science</strong> (CAS-Q1).</p>
	    <p>[05.2025] 🎉 One paper <strong>UTMP</strong> was accepted by <strong>IEEE TMC</strong> (CCF-A) as first author.</p>
	    <p>[05.2025] 🎉 One paper <strong>EVA</strong> was accepted by <strong>ICML 2025</strong> (CCF-A).</p>
	    <p>[04.2025] 🎉 One paper <strong>FBQuant</strong> was accepted by <strong>IJCAI 2025</strong> (CCF-A).</p>
	    <p>[04.2025] 🎉 One paper <strong>RepCaM++</strong> was accepted by <strong>IEEE TMC</strong> (CCF-A) as first author.</p>
	    <p>[03.2025] 💻 <strong>PAT</strong> (AAAI'25) has been applied to Samsung’s on-device applications for smartphones and TVs.</p>
	    <p>[01.2025] 📕 I am selected for the First session “<strong>Young Talent Support Project Doctoral Special Program</strong>” of China Association for Science and Technology (3,226 recipients nationwide)</p>
	    <p>[12.2024] 🎉 One paper <strong>BEVUDA++</strong> was accepted by <strong>IEEE TCSVT</strong> (CAS-Q1) as first author.</p>
	    <p>[12.2024] 🎉 One paper <strong>PAT</strong> was accepted by <strong>AAAI 2025</strong> (CCF-A).</p>
	    <p>[12.2024] 🏅 I was named <strong>"Outstanding Ph.D. Candidate"</strong> by NJU.</p>
	    <p>[11.2024] 💰 I was offered <strong>"Bank of Jiangsu"</strong> Scholarship from NJU.</p>
	    <p>[09.2024] 💻 The Panasonic Corporation is integrating the <strong>VeCAF</strong> (MM'24) into its actual business operations.</p>
	    <p>[08.2024] 💼 I joined the Beijing Academy of Artificial Intelligence supervised by <a class="blue-text" href="https://www.shanghangzhang.com/" target="_blank"><strong>Prof. Shanghang Zhang</strong></a>.</p>
	    <p>[07.2024] 🎉 One paper <strong>VeCAF</strong> was accepted by <strong>ACMMM 2024</strong> (CCF-A) as first author.</p>
	    <p>[07.2024] 🎓 I am offered a <strong>dual Ph.D.</strong> at The Hong Kong Polytechnic University supervised by <a class="blue-text" href="https://web.comp.polyu.edu.hk/csdwang/" target="_blank"><strong>Prof. Dan Wang</strong></a>.</p>
	    <p>[05.2024] 🎉 One paper <strong>MuPFL</strong> was accepted by <strong>IEEE TMC</strong> (CCF-A) as first author.</p>
	    <p>[04.2024] 📕 Our project: Activation Sparsity via Mixture of Experts for Continual Test Time Adaptation, has been selected as one of the <strong>Jiangsu Province Graduate Research and Practical Innovation Projects</strong>.</p>
	    <p>[03.2024] 💻 The Panasonic Corporation is integrating the <strong>MoFME</strong> (AAAI'24) into its actual business operations.</p>
	    <p>[01.2024] 🎉 One paper <strong>BEVUDA</strong> was accepted by <strong>IEEE ICRA 2024</strong> (CCF-B) as first author.</p>
	    <p>[12.2023] 🎉 One paper <strong>MoFME</strong> was accepted by <strong>AAAI 2024</strong> (CCF-A) as first author.</p>
	    <p>[08.2023] 🏅 We won <strong>2nd place</strong> in the SHIFT Challenge 2023 - Continuous Test-time Adaptation for Semantic Segmentation in the challenges of VCL Workshop, ICCV2023.</p>
	    <p>[06.2023] 🎓 I joined the ISCL lab at <strong>Nanjing University</strong> and the HMI Lab of the NATIONAL ENGINEERING RESEARCH CENTER OF VISUAL TECHNOLOGY at <strong>Peking University</strong> as a joint Ph.D. student.</p>
	    <p>[03.2023] 🎓 I received <strong>M.Phil.</strong> degree from <strong>The Chinese University of Hong Kong, Shenzhen</strong></p>
	    <p>[03.2023] 🎉 One paper <strong>RepCaM</strong> was accepted by <strong>ACM NOSSDAV 2023</strong> (CCF-B) as first author.</p>
	    <p>[03.2023] 🎉 One paper <strong>CdFed</strong> was accepted by <strong>IEEE ICME 2023</strong> (CCF-B) as first author.</p>
	    <p>[03.2023] 🎉 One paper <strong>FedFHN</strong> was accepted by <strong>IEEE Network</strong> (CAS-Q2) as first author.</p>
	    <p>[03.2023] 🎉 One paper <strong>FedAB</strong> was accepted by <strong>IEEE IoTJ</strong> (CAS-Q1).</p>
	    <p>[03.2023] 🎉 Two papers <strong>BEVSAN</strong> and <strong>CDCCA</strong> were accepted by <strong>IEEE CVPR 2023</strong> (CCF-A).</p>
	    <p>[09.2022] 💼 I joined <strong>OPPO Research</strong> as a Research Intern.</p>
	    <p>[08.2021] 🎓 I joined INML lab at <strong>The Chinese University of Hong Kong, Shenzhen</strong> as an <strong>M.Phil.</strong> student.</p>
	  </div>
	</div>
 
<br>
<br>


# 📝 Publications 
(*= Equal Contribution)

- <code class="badge">ToN 2025</code> [A Game-Theoretic Framework for Privacy-Aware Client Sampling in Federated Learning](https://ieeexplore.ieee.org/document/10960763), **Wenhao Yuan**, Xuehe Wang.
- <code class="badge">TMC 2024</code> [Adaptive Federated Learning via New Entropy Approach](https://ieeexplore.ieee.org/abstract/document/10531669), Shensheng Zheng<sup>*</sup>, **Wenhao Yuan<sup>*</sup>**, Xuehe Wang, Lingjie Duan.
- <code class="badge">IJCNN 2024</code> [QI-DPFL: Quality-Aware and Incentive-Boosted Federated Learning with Differential Privacy](https://ieeexplore.ieee.org/abstract/document/10651264), **Wenhao Yuan**, Xuehe Wang.
- <code class="badge">QSHINE 2023</code> [Entrofuse: Clustered Federated Learning Through Entropy Approach](https://link.springer.com/chapter/10.1007/978-3-031-65123-6_6), Kaifei Tu, **Wenhao Yuan**, Xuehe Wang.
- <code class="badge">Preprint</code> [FedAgg: Adaptive Federated Learning with Aggregated Gradients](https://arxiv.org/abs/2303.15799), **Wenhao Yuan**, Xuehe Wang.

# 🎖 Honors and Awards
- **SYSU Excellent Graduate** (2025) 
- **National Scholarship** (2024) 
- Excellent Graduate Academic Scholarship (2022-2024)
- SYSU Excellent Teaching Assistant (2024)
- The 19th China Post-Graduate Mathematical Contest in Modeling, **National Third Prize** (Dec. 2022)

# 📖 Educations
- *2022.09 - current*, Third-year Master, School of Artificial Intelligence, Sun Yat-sen University, Guangdong. 
- *2018.09 - 2022.06*, Undergraduate, School of Mechanical and Electrical Engineering, University of Electronic Science and Technology of China, Sichuan. 

# 💁 Academic Service
- *Journal*: IEEE Transactions on Mobile Computing, IEEE Transactions on Parallel and Distributed Systems, IEEE Transactions on Communications, Future Generation Computer Systems, Knowledge-Based Systems, Neural Networks, Engineering Applications of Artificial Intelligence.
- *Conference*: IJCNN'25, CEC'24-25.

# 💻 Internships 
- *2025.07 - 2025.09*, [Lorem](https://github.com/), China.
