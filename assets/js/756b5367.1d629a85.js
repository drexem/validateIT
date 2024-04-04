"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[898],{9834:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(4848),i=t(8453);const s={sidebar_position:2},o="CLI Application - administration documentation",r={id:"cli/administration/index",title:"CLI Application - administration documentation",description:"Here you will find the information needed for running the CLI version of Validator.",source:"@site/docs/cli/administration/index.md",sourceDirName:"cli/administration",slug:"/cli/administration/",permalink:"/validateIT/docs/cli/administration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CLI Application - user documentation",permalink:"/validateIT/docs/cli/user/"},next:{title:"Cli App - developer documentation",permalink:"/validateIT/docs/cli/developer/"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Example usage (docker)",id:"example-usage-docker",level:3},{value:"Remote (online) files",id:"remote-online-files",level:4},{value:"Local files",id:"local-files",level:4},{value:"Mapping of local files into the Docker container",id:"mapping-of-local-files-into-the-docker-container",level:2},{value:"Examples",id:"examples",level:2},{value:"Alternative",id:"alternative",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"cli-application---administration-documentation",children:"CLI Application - administration documentation"}),"\n",(0,n.jsx)(a.p,{children:"Here you will find the information needed for running the CLI version of Validator."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"You have two options"}),":"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"#docker",children:"Docker"})})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"#net-build",children:".NET Build"})})}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Don't forget to check out the ",(0,n.jsx)(a.a,{href:"/validateIT/docs/cli/user/",children:"user documentation"})," of CLI App!"]}),"\n",(0,n.jsx)(a.h2,{id:"docker",children:"Docker"}),"\n",(0,n.jsx)(a.p,{children:"To use this app you need to have docker installed on your local machine and have the docker daemon running!"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"Clone"})," the ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator",children:"repository"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Relocate to the directory ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator",children:"CSV_Validator"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Build the docker image. Run this command (you\r\ncan replace the ",(0,n.jsx)(a.code,{children:"validate-image"})," with your desired image name):"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker build -t validate-image -f ValidateCLI/Dockerfile .\n"})}),"\n",(0,n.jsx)(a.p,{children:"Now you can run the application using command:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run validate-image\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This will run the application. However the application will expect some command line ",(0,n.jsx)(a.a,{href:"/validateIT/docs/cli/user/",children:"arguments"})," to follow the command."]}),"\n",(0,n.jsx)(a.h3,{id:"example-usage-docker",children:"Example usage (docker)"}),"\n",(0,n.jsxs)(a.p,{children:["We expect that you have completed  steps 1, 2 and 3 from the ",(0,n.jsx)(a.a,{href:"#docker",children:"docker part"}),".\r\nPlease be aware of the name of your docker container."]}),"\n",(0,n.jsx)(a.h4,{id:"remote-online-files",children:"Remote (online) files"}),"\n",(0,n.jsx)(a.p,{children:"You can run the image you have created in the step 3. like this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run validate-image --metadataIRI https://w3c.github.io/csvw/tests/test035/csv-metadata.json \n"})}),"\n",(0,n.jsxs)(a.p,{children:["This will start remote validation on a file that is part of the integration tests for the ",(0,n.jsx)(a.code,{children:"validator"}),". You\r\ncan replace the URL with arbitrary URL of metadata file you want to validate. In this case the metadata starts\r\nwith metadata file so no other metadata is located, this type of validation is called ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"Metadata validation"})]}),"\n",(0,n.jsxs)(a.p,{children:["If you want to start ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"tabular validation"})," you can do so by invoking:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run validate-image --tabularIRI https://w3c.github.io/csvw/tests/test006.csv\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you provide both parameters:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run validate-image --tabularIRI https://w3c.github.io/csvw/tests/test012/tree-ops.csv --metadataIRI https://w3c.github.io/csvw/tests/test012/csv-metadata.json\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The validation will be conducted as ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"overriding"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"local-files",children:"Local files"}),"\n",(0,n.jsx)(a.p,{children:"When you want to validate local files you need to somehow map your local directory into the container.\r\nLets look at an example:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run -v /path/to/your/directory:/data validate-image --tabularIRI /data/my.csv\n"})}),"\n",(0,n.jsxs)(a.p,{children:["So if you have your local files in ",(0,n.jsx)(a.code,{children:"/path/to/your/directory"})," it will map them into the directory ",(0,n.jsx)(a.code,{children:"/data"})," in the docker container.\r\nThis also means that if you used absolute paths inside metadata file, the validation won't succeed as the paths will be invalid."]}),"\n",(0,n.jsx)(a.p,{children:"Another example is that for example you want to start validation from metadata file lets say it's path is:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/opt/myFiles/metadata.json"})}),"\n",(0,n.jsx)(a.p,{children:"and this file references tabular data file with path:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/opt/myFiles/tabular.csv"})}),"\n",(0,n.jsx)(a.p,{children:"for this we will use command:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run -v /opt/myFiles:/data validate-image --metadataIRI /data/metadata.json\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you provide both paths:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run -v /opt/myFiles:/data validate-image --metadataIRI /data/metadata.json --tabularIRI /data/tabular.csv\n"})}),"\n",(0,n.jsxs)(a.p,{children:["the validation will be done as ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"overriding"}),". That means that the reference from the\r\nmetadata file ",(0,n.jsx)(a.code,{children:"metadata.json"})," to another file will be overriden to the path you provided, in this\r\ncase ",(0,n.jsx)(a.code,{children:"/data/tabular.csv"}),". This is useful if you want to use the same schema for different tabular\r\nfiles."]}),"\n",(0,n.jsxs)(a.p,{children:["Please checkout the ",(0,n.jsx)(a.a,{href:"#section-CLI-arguments",children:"arguments"})," documentation for the command line for more info about the usage."]}),"\n",(0,n.jsx)(a.h2,{id:"mapping-of-local-files-into-the-docker-container",children:"Mapping of local files into the Docker container"}),"\n",(0,n.jsx)(a.p,{children:"If you want to use local files in the docker container you firstly need to map directory containing such files into the Docker container.\r\nThis is done using the parameter -v:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"-v /my/local/path:/my/docker/container/path\n"})}),"\n",(0,n.jsxs)(a.p,{children:["this will map the directory ",(0,n.jsx)(a.code,{children:"/my/local/path"})," of your local machine into the directory ",(0,n.jsx)(a.code,{children:"/my/docker/container/path"})," in the docker container. Since this mapping we will be using only the mapped paths as the Validator running inside the Docker container cannot access your local files."]}),"\n",(0,n.jsxs)(a.p,{children:["Now if we want to start for example ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"tabular validation"})," we can do so by invoking:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker run -v /my/local/path:/my/docker/container/path validate-image --tabularIRI /my/docker/container/path/my.csv --rdfPaths /my/docker/container/path/result.ttl\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In this example we have a local file ",(0,n.jsx)(a.code,{children:"/my/local/path/my.csv"})," and the validator sees it as ",(0,n.jsx)(a.code,{children:"/my/docker/container/path/my.csv"}),". Also notice that if we want to create for example a RDF result we also need to use mapped directories not the local ones!"]}),"\n",(0,n.jsxs)(a.p,{children:["We recommend to map your directories into the directory ",(0,n.jsx)(a.code,{children:"/data"})," in the docker container."]}),"\n",(0,n.jsx)(a.h1,{id:"net-build",children:".NET Build"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.em,{children:["This has been tested on ",(0,n.jsx)(a.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/7.0",children:".NET 7.0"}),"\r\nand ",(0,n.jsx)(a.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:".NET 8.0"}),"."]})}),"\n",(0,n.jsx)(a.p,{children:"If you prefer to build the CLI app on your own from the source files, we have step-by-step\r\nguide for you:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"Clone"})," the ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator",children:"repository"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Relocate to the directory ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator",children:"CSV_Validator"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"To restore the project run:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet restore\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsx)(a.li,{children:"To start the validation run:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet run --configuration Release [CLI arguments]\n"})}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(a.p,{children:["Start ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"Tabular validation"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet run --tabularIRI https://w3c.github.io/csvw/tests/test005.csv\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Start ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"Metadata validation"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet run --metadataIRI https://w3c.github.io/csvw/tests/test034/csv-metadata.json\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Start ",(0,n.jsx)(a.a,{href:"/validateIT/docs/general/#validation-types",children:"Overriding validation"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet run --metadataIRI https://w3c.github.io/csvw/tests/test011/tree-ops.csv-metadata.json --tabularIRI https://w3c.github.io/csvw/tests/test011/tree-ops.csv\n"})}),"\n",(0,n.jsx)(a.p,{children:"You can replace the URLs with your local file paths to validate local files!"}),"\n",(0,n.jsxs)(a.p,{children:["Please checkout the ",(0,n.jsx)(a.a,{href:"/validateIT/docs/cli/user/",children:"arguments"}),"\r\ndocumentation for the command line for more info about the usage."]}),"\n",(0,n.jsx)(a.h2,{id:"alternative",children:"Alternative"}),"\n",(0,n.jsx)(a.p,{children:"Alternatively you can follow these steps:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"Clone"})," the ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator",children:"repository"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Relocate to the directory ",(0,n.jsx)(a.a,{href:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator",children:"CSV_Validator"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"To restore the project run:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet restore\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsx)(a.li,{children:"Build the application:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet build --configuration Release --output /output/directory\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsx)(a.li,{children:"Run the application"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dotnet /output/directory/ValidateCLI.dll [CLI arguments]\n"})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var n=t(6540);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);