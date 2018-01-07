
window.onload=function(){
	// 简历数据
	(function dataBind(){
		// 个人简历信息
        var resume ={
        // 首页信息
        title:"彭富的个人简历",
        introduction:"学习是一辈子的事，只要不蹉跎时光，追求自我与乐趣",
        descript:"我叫彭富，喜欢技术，热爱挑战，转型前端",
        // 个人基本信息
        person_info:[
            {   title:"个人信息",
            	content:"姓名:彭富&nbsp性别:男</br>年龄:25",

            },
            {
            	title:"状态",
            	content:"状态:已离职 </br>居住地:广州市"
            },
            {
            	title:"学校专业",
            	content:"毕业学校:华南理工大学</br>学历:本科",
            },
            {
            	title:"联系方式",
            	content:"手机:17620892355</br>邮箱:scutpengf@163.com",
            }
            
        ],
        // 前端技能和工具
        person_skill:[
            {
            	title:"前端基础",
            	content:"熟悉使用HTML+CSS 制作符合W3C网页，使用CSS Hack技术兼容IE等多种浏览器。</br>熟悉使用JavaScript及Jquery框架实现网页动态效果。仿写京东书城首页和购物车登录页。"
            },
             {
             	title:"框架&工具",
             	content:"了解响应式Bootstrap框架及渐进式Vue框架，以及基本ES6标准，H5 Canvas画布组件。</br>熟悉使用Photoshop和Sublime网页制作工具。"

             },
             {
             	title:"其他",
             	content:"了解后端Node.JS后端平台，以及Gulp和GitHub等前端自动化工具。</br>了解Ajax和跨域技术，以及Json协议。使用面向对象式重构HTML简历。</br>详情请参考：http://github.com/pokerfacs/resume/tree/master"
             }
        ],
        // 工作经历
        person_experience:[
            {
            	url:"./img/team/scut.jpg",
            	company:"华南理工大学",
            	time:"2011/09-2015/07",
            	profession:"机械工程及自动化",
            	content:"理工科机械类，学习C语言和VB语言"
            },
            {   url:"./img/team/nsk.jpg",
            	company:"恩斯克(中国)研究开发有限公司",
            	time:"2015/07-2017/05",
            	profession:"设计开发",
            	content:"汽车电动助力转向系统项目开发"
            },
            {
            	url:"./img/team/01.jpg",
            	company:"广州寿藤汽车配件有限公司",
            	time:"2017/08-2017/09",
            	profession:"设计开发",
            	content:"汽车内饰地毯项目开发"
            },
            {
            	url:"./img/team/guangzhou.jpg",
            	company:"离职自学",
            	time:"2017/10-至今",
            	profession:"前端",
            	content:"主要学习HTML+CSS,JS，ajax技术和Jquery等框架，并学习前端面向对象函数等知识"
            }

        ],
        // 个人评价
        person_assess:[
            "自学能力较强，一年半自学日语取得N2等级证书，</br>三个月无基础自学前端语言。",
             "积极上进，工作踏实，有责任感，耐压性好，乐于接受新事物，</br>热爱编程的成就感和互联网行业的发展。",
             "目前只熟悉前端知识，没有项目和实战经验，</br>不熟悉后端语言，但这是学习的方向。"
            ],
        contact:[
            'http://github.com/pokerfacs/</br>resume/tree/master',
            '17620892355',
            'scutpengf@163.com'
        ]
        };
        // 数据绑定
        document.getElementById('resume-title').innerText=resume.title;
        var resumeIntroduction = document.getElementById('resume-introduction');
        resumeIntroduction.getElementsByTagName("span")[0].innerHTML=resume.introduction;
        resumeIntroduction.getElementsByTagName("p")[0].innerText=resume.descript;        
        var i;
        var personInfo_str="";
        var personSkill_str="";
        var personExperience_str="";
        var contact_str="";
        
        var personInfo=document.getElementById('person-info').getElementsByTagName("div");
        for(i=0;i< resume.person_info.length;i++){
        	    personInfo_str  ="";
        	    var div=document.createElement("span");
                personInfo_str +='<h4><strong>';
                personInfo_str +=resume.person_info[i].title;
                personInfo_str +='</strong></h4><p>';
                personInfo_str +=resume.person_info[i].content;
                personInfo_str +='</p> </div>';
                div.innerHTML=personInfo_str
                personInfo[i].appendChild(div);
        };

		var personSkill=document.getElementById('person-skill').getElementsByTagName("div");
		for(i=0;i< resume.person_skill.length;i++){
			    personSkill_str  ="";
                personSkill_str +='<h4>';
                personSkill_str +=resume.person_skill[i].title;
                personSkill_str +='</h4> <p>';
                personSkill_str +=resume.person_skill[i].content;
                personSkill_str +='</p>';
                personSkill[i].innerHTML = personSkill_str;
        };

        for(i=0;i< resume.person_experience.length;i++){
                personExperience_str +='<div class="col-md-3 col-sm-6"><div class="thumbnail"><img src="'
                personExperience_str +=resume.person_experience[i].url;
                personExperience_str +='"class="img-circle team-img"><div class="caption"><h3>';
                personExperience_str +=resume.person_experience[i].company;
                personExperience_str +='</h3><p>';
                personExperience_str +=resume.person_experience[i].time;
                personExperience_str +='</p><p>';
                personExperience_str +=resume.person_experience[i].profession;
                personExperience_str +='</p><p>';
                personExperience_str +=resume.person_experience[i].content;
                personExperience_str +='</p></div></div></div>';
        };
        document.getElementsByClassName('person-experience')[0].innerHTML = personExperience_str;

        var personAssesse=document.getElementById('testimonial').getElementsByTagName("p");
        for(i=0;i< resume.person_assess.length;i++){
                personAssesse[i].innerHTML=resume.person_assess[i];
        };

        var contactMe=document.getElementById('contactMe').getElementsByTagName("p");
        for(i=0;i< resume.contact.length;i++){
                contactMe[i].innerHTML =resume.contact[i];
        }     
	})();




	// ---------------------侧边栏添加
	var title=["首页","基本资料","专业技能","人生经历","自我评价","联系方式"];
		var item=document.getElementsByClassName('navL-item');
		// 侧边栏鼠标事件绑定
		for(var i=0;i<item.length;i++){
			item[i].previousSibling.innerHTML=title[i];
			item[i].onmouseover=function(){
				this.previousSibling.style.display="inline-block";
				this.style.fontSize="23px";
			};
			item[i].onmouseout=function(){
				this.previousSibling.style.display="none";
	     		this.style.fontSize="13px";
		    };
		}
		// 侧边栏与页面位置绑定
		window.onscroll = function() { 
		 	var item=document.getElementsByClassName('navL-item');
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			// 滚动条位置大于400显示
			if(scrollTop<300){
				document.getElementsByClassName("side-nav")[0].style.display="none";

			}else{
				document.getElementsByClassName("side-nav")[0].style.display="block";
			}
			// 可视页面高度600，关联侧边栏的顺序
			for(var i=1;i<item.length+1;i++){
			if(scrollTop>=600*(i-1)&&scrollTop<600*i){
				// alert("a");
				item[i-1].style.fontSize="23px";
			}else{
				item[i-1].style.fontSize="13px";
			}
			
			}
		}
		console.log("您好！该简历代码模板非原创，原创作者Boran,博客http://blog.youzewang.com/jianli。个人能力有限，未采用模块化和自动化框架，添加了侧边栏导航和数据绑定功能。有待改进，请多多指教")
}	
