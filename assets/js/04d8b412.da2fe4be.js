"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5492],{3642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_position:3},l="Web App - developer documentation",o={id:"web_app/developer/index",title:"Web App - developer documentation",description:"Here you can find all that you need if you want to continue the development of the Validator library or to",source:"@site/docs/web_app/developer/index.md",sourceDirName:"web_app/developer",slug:"/web_app/developer/",permalink:"/validateIT/docs/web_app/developer/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web App - administration documentation",permalink:"/validateIT/docs/web_app/administration/"},next:{title:"General information about validation",permalink:"/validateIT/docs/general/"}},a={},d=[{value:"Generated code documentation",id:"generated-code-documentation",level:2},{value:"General architecture",id:"general-architecture",level:2},{value:"Contents of namespaces",id:"contents-of-namespaces",level:2},{value:"Adapters",id:"adapters",level:3},{value:"Constants",id:"constants",level:3},{value:"Controllers",id:"controllers",level:3},{value:"File",id:"file",level:3},{value:"Models",id:"models",level:3},{value:"Resources",id:"resources",level:3},{value:"Result",id:"result",level:3},{value:"Security",id:"security",level:3},{value:"Views",id:"views",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"web-app---developer-documentation",children:"Web App - developer documentation"}),"\n",(0,s.jsx)(n.p,{children:"Here you can find all that you need if you want to continue the development of the Validator library or to\r\nuse it more advanced!"}),"\n",(0,s.jsxs)(n.p,{children:["Don't forget to check out the ",(0,s.jsx)(n.a,{href:"../user/",children:"user documentation"})," to get a grasp of what this library is all about!"]}),"\n",(0,s.jsx)(n.p,{children:"Contents:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#generated-code-documentation",children:"Generated documentation"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#general-architecture",children:"General architecture"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#contents-of-namespaces",children:"Contents of namespaces"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"generated-code-documentation",children:"Generated code documentation"}),"\n",(0,s.jsxs)(n.p,{children:["You can find the generated documentation from source code ",(0,s.jsx)(n.a,{href:"pathname:///generated_docs/web_app/generated/html/index.html",children:"here"}),".\r\nIt contains detailed description of all classes and interfaces we need."]}),"\n",(0,s.jsx)(n.h2,{id:"general-architecture",children:"General architecture"}),"\n",(0,s.jsxs)(n.p,{children:["The application is designed using common known architectural style ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",children:"Model-View-Controller (MVC)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can see the general idea on the picture:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MVC",src:t(5243).A+"",width:"321",height:"191"})}),"\n",(0,s.jsx)(n.p,{children:"Here are some basic definitions of individual parts to refresh your knowledge:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model"})," - In the MVC pattern, the ",(0,s.jsx)(n.strong,{children:"Model"})," represents the application's data and business logic. It encapsulates the data and behaviors that are relevant to the application, independent of the user interface. In an ASP.NET web application, the Model typically consists of classes that represent entities, data access logic (such as Entity Framework or ADO.NET code), validation rules, and other business logic. Models abstract away the database details and provide a structured approach to interact with data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"View"})," - The ",(0,s.jsx)(n.strong,{children:"View"})," in MVC represents the user interface (UI) of the application. It is responsible for presenting the data to the user in a human-readable format and for collecting input from the user. In an ASP.NET web application, Views are usually implemented as HTML templates mixed with server-side code (using Razor syntax in ASP.NET MVC). Views should be kept as lightweight as possible, containing minimal logic beyond what is necessary for rendering the UI elements dynamically."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Controller"})," - The ",(0,s.jsx)(n.strong,{children:"Controller"})," acts as an intermediary between the Model and the View. It receives user input from the View, processes it by interacting with the Model, and determines which View to display in response. In ASP.NET MVC, Controllers are classes that inherit from the Controller base class and contain action methods corresponding to different user interactions (e.g., handling HTTP requests). Controllers are responsible for orchestrating the flow of the application, handling business logic related to user input, and selecting the appropriate View to render."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So if you wish to extend the Web App you can add more ",(0,s.jsx)(n.code,{children:"Models"}),", ",(0,s.jsx)(n.code,{children:"Views"})," and ",(0,s.jsx)(n.code,{children:"Controllers"})," as you wish!"]}),"\n",(0,s.jsx)(n.h2,{id:"contents-of-namespaces",children:"Contents of namespaces"}),"\n",(0,s.jsx)(n.p,{children:"On this picture you can see all the embedded name-spaces:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"validateWebAppNS",src:t(9607).A+"",width:"555",height:"792"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will describe individual sub-namespaces:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#adapters",children:"Adapters"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#constants",children:"Constants"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#controllers",children:"Controllers"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#file",children:"File"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#models",children:"Models"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#resources",children:"Resources"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#result",children:"Result"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#security",children:"Security"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#views",children:"Views"})})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adapters",children:"Adapters"}),"\n",(0,s.jsx)(n.p,{children:"Contains classes that tries to mitigate the differences between the library variants. For example we need to store the errors and warnings serialized into the db and this is what these classes enable."}),"\n",(0,s.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,s.jsx)(n.p,{children:"Contains just basic constants that are used from different modules of the Web Application for example like address of the web service that we use."}),"\n",(0,s.jsx)(n.h3,{id:"controllers",children:"Controllers"}),"\n",(0,s.jsx)(n.p,{children:"Contains instances of Controllers from the MVC pattern."}),"\n",(0,s.jsx)(n.h3,{id:"file",children:"File"}),"\n",(0,s.jsx)(n.p,{children:"Contains classes that helps to mitigate problems with the local files provided by the user. For example where to store them, afterwards we change from result page the temporary file names from the server to the file names that the user provided originally."}),"\n",(0,s.jsx)(n.h3,{id:"models",children:"Models"}),"\n",(0,s.jsx)(n.p,{children:"Contains instances of Models from the MVC pattern."}),"\n",(0,s.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(n.p,{children:"Contains localized strings for the Web Application and its different views."}),"\n",(0,s.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:"Contains result writers wrappers from the ValidateLib. As we do not store the errors and warnings to the database in the same form as the lib produces them we need to have some wrappers around the original classes from the library to mitigate the issue."}),"\n",(0,s.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(n.p,{children:["Contains classes that helps with the problem of security of the web app.\r\nFor example it contains class ",(0,s.jsx)(n.code,{children:"Sanitizer"})," which sanitizes the input from the user for example if he did not provide too big file or some malicious file names that could harm the server."]}),"\n",(0,s.jsx)(n.h3,{id:"views",children:"Views"}),"\n",(0,s.jsx)(n.p,{children:"Contains the instances of the Views from the MVC. Basically provides UI for the user using razor pages and basic javascript and html."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5243:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAC/CAYAAABg4W7sAAAAAXNSR0IArs4c6QAABpB0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJhcHAuZGlhZ3JhbXMubmV0JTIyJTIwbW9kaWZpZWQlM0QlMjIyMDI0LTAzLTI4VDA5JTNBMTglM0E0Mi45OTZaJTIyJTIwYWdlbnQlM0QlMjJNb3ppbGxhJTJGNS4wJTIwKFdpbmRvd3MlMjBOVCUyMDEwLjAlM0IlMjBXaW42NCUzQiUyMHg2NCklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBDaHJvbWUlMkYxMjMuMC4wLjAlMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIySHNneGI2Yk9ORHZ4THhlMzJFaFQlMjIlMjB2ZXJzaW9uJTNEJTIyMjQuMi4wJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTIwaWQlM0QlMjI1ZjBiYWUxNC03YzI4LWUzMzUtNjMxYy0yNGFmMTcwNzljMDAlMjIlM0U3VmpiY3Bzd0VQMGFQeVlERW1ENzBiZTA2YVJKcDA0dmVaU05ER29CTVVLJTJCNWV1N01zS2dFQk83dGV1T3AwJTJCV2puWVhzV2YzQ0xtRkIlMkZIcW5TQnAlMkJKSDdOR29oeTElMkIxOExDRmtPMWdCMzRVc3M2Uk51N2tRQ0NZcjQxS1lNeWVxUVl0amM2WlR6UERVSEllU1phYTRKUW5DWjFLQXlOQzhLVnBOdU9SJTJCZFNVQkxRR2pLY2txcVBmbUM5RGpkcVdWUzY4cHl3STlhTTdybDZZa09uUFFQQjVvcCUyQlg4SVRtS3pFcHdtalRMQ1ElMkJYMVlnUEdyaGdlQmM1cU40TmFDUlNtdVJzZHp2WnNmcWRzdUNKbklmQjVwNTlBR0xEODlXSng1blNTZW1hWGlsYWNya3VrZ0Y5U0V6ZXNxRkRIbkFFeEtOU3JTJTJGZVYycW9sb3dLMjN1T0U4QnRBSDhRYVZjYTVySlhIS0FRaGxIZXBXdW1QeXUzSyUyRmJycDQlMkI2V2hxUEZ4VkolMkJ0aWtraXhybnFwJTJCVk1SVVUxS3Y4MnNjTXpmVUwzV3pzUnBLT056TWFVTjJTcEtrNGlBeWdZN3RLVVhPb2J5bU1KJTJCd0UlMkZRaUVpMk1QZEJkT2tHV3p2dDJoT0NyQ3NHS1dlSnpDcVJQeWtBREhRWGVvNmJSOVE5aUx3WDlmREMza1dOOWpESWQxRE1LcTlTUXBzYU82RGViUDNXQ3hMTmRSNiUyQmpFZWZBZWtOSG04ZjdsOHR4enN5QWIweFNvaEVMRWhnUEFVT3FRQmdRWVZrME5BOXZSQXozOCUyQnJsV2JzbVV3MjhWUTU2RFJDY0xmZmNvZmJBbEVCNktyMWl0cG81N0tUcTZXenU2dnElMkZPdm9WOWExMVhIYlJ2S0wwanFzUkdxY1h1R3U2Y0puc3d4SzFlVDFPRXpXaVB6SzZMTEdINmhlcW9ZeDklMkJjYlBncm1JanFERlBhemxFeFpFdHh0WmtOazdjT3RWRHJUWDRaTTBqRzRxJTJGQkxPSmZNQ3RuSmFxM3hkeExsdGkyREpGd1V3TEp5UmhSSFJGZzVIb3JUNFRYaURCNE9UYnB6RnJrdWxkY1FYdXNONFMxbHZxcnlkcVBLSDFHczBaNWl2YU1HVGl2V3JtV1dGdW8yaTdXSEd1MVBJOVp1WGFzJTJGRFh1UG84c1FhYWV4OTYxcjdDTG56MFQ1OUNMcyUyRmRlRG8lMkJzQlBvWWV2Tm53MjdPa0NKSHZYM3VWbFhKcVlYR2E3VThqTE8yTEZoYnZEV0ZCMlBiTWp6JTJGMHIlMkJzTXFoRTI0TkRiUElvZyUyRlpmMHllZTRaanZZblhOJTJGOG5YUEl2RmJxVWElMkZkVU5INTdxaDR6MUYlMkZpdzNkTnclMkI3SWJ1Tk51ZjZJWnUxWHI5JTJGdUh4OXVicE1zUzUyOWolMkJjRFczdlk1anF2TnhydWF1WjNxY1RxeHhqVUQ5aDYwWEtmbjEyUUtHZ2R5a040Y200aVVDRHpic0xramlzZnYzYnZVd0xmJTJGZ3pma3QlMkYwREhvMTglM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNFKhKlGgAAGPRJREFUeF7tnV9oXVW+x3+dC5dJZDoXc66lBEIpQvvWsRQUkkDblxRfBB8MkgaRPMS2sUMcncINTdPU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"},9607:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/validateWebAppNs-bc932680b4bc3d114cdf986d7fe40a50.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);