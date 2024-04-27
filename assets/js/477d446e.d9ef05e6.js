"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6254],{8157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const r={sidebar_position:2},a="Library - administration documentation",o={id:"lib/administration/index",title:"Library - administration documentation",description:"Here you will find the information needed for installing the library or running library's integration tests!",source:"@site/docs/lib/administration/index.md",sourceDirName:"lib/administration",slug:"/lib/administration/",permalink:"/validateIT/docs/lib/administration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Library - user documentation",permalink:"/validateIT/docs/lib/user/"},next:{title:"Library - developer documentation",permalink:"/validateIT/docs/lib/developer/"}},l={},d=[{value:"Installing library",id:"installing-library",level:2},{value:"Using Nuget Package Manager Console",id:"using-nuget-package-manager-console",level:3},{value:"Using .NET",id:"using-net",level:3},{value:"Run integration tests",id:"run-integration-tests",level:2},{value:"Docker",id:"docker",level:3},{value:"Using .NET",id:"using-net-1",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"library---administration-documentation",children:"Library - administration documentation"}),"\n",(0,i.jsxs)(n.p,{children:["Here you will find the information needed for ",(0,i.jsx)(n.a,{href:"#installing-library",children:"installing"})," the library or ",(0,i.jsx)(n.a,{href:"#run-integration-tests",children:"running"})," library's integration tests!"]}),"\n",(0,i.jsxs)(n.p,{children:["Also don't forget to check out ",(0,i.jsx)(n.a,{href:"../developer/",children:"developer documentation"})," for the library!"]}),"\n",(0,i.jsxs)(n.p,{children:["You can check out the nugget package ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/CSVW-validator-lib",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-library",children:"Installing library"}),"\n",(0,i.jsx)(n.h3,{id:"using-nuget-package-manager-console",children:"Using Nuget Package Manager Console"}),"\n",(0,i.jsxs)(n.p,{children:["To install the library you can use ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell",children:"Nuget Package Manager Console"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"All you need to do is use command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Install-Package CSVW-validator-lib\n"})}),"\n",(0,i.jsx)(n.p,{children:"and you should have your validation library installed!"}),"\n",(0,i.jsx)(n.h3,{id:"using-net",children:"Using .NET"}),"\n",(0,i.jsxs)(n.p,{children:["First relocate in the console to the directory containing your ",(0,i.jsx)(n.code,{children:".csproj"})," file.\r\nThen run following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package CSVW-validator-lib\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-integration-tests",children:"Run integration tests"}),"\n",(0,i.jsxs)(n.p,{children:["The validator passes all the ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/csvw/tests/#manifest-validation",children:"integration tests"}),".\r\nYou can try running the tests here!"]}),"\n",(0,i.jsxs)(n.p,{children:["**\r\nWe use the api of ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/csvw/tests/#manifest-validation",children:"W3C"})," for testing\r\nso please do not overload their API aby running the tests multiple times!\r\n**"]}),"\n",(0,i.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(n.p,{children:"To run the integration tests we will again create a simple docker image and then run it.\r\nFollow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Relocate to the directory ",(0,i.jsx)(n.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator?ref_type=heads",children:"CSV_Validator"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Create a docker image:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t test-image -f CSVWIntegrationTests/Dockerfile .\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"run the docker image using:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run test-image\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see the similar output to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Passed!  - Failed:     0, Passed:   283, Skipped:     0, Total:   283, Duration: 1 m 32 s - CSVWIntegrationTests.dll (net7.0)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-net-1",children:"Using .NET"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["This has been tested on ",(0,i.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/7.0",children:".NET 7.0"}),"\r\nand ",(0,i.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:".NET 8.0"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["To run the integration using just ",(0,i.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/",children:".NET"})," you can follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Relocate to the directory ",(0,i.jsx)(n.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator/CSVWIntegrationTests?ref_type=heads",children:"CSVWIntegrationTests"})]}),"\n",(0,i.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet test\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you should see output similar to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Passed!  - Failed:     0, Passed:   283, Skipped:     0, Total:   283, Duration: 1 m 19 s - CSVWIntegrationTests.dll (net7.0)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);