montageDefine("667c839","test/fixtures/log",{dependencies:["../../lib/exit"],factory:function(e,t,r){function s(e){f.indexOf("stdout")!==-1&&process.stdout.write("stdout "+e+"\n")}function i(e){f.indexOf("stderr")!==-1&&process.stderr.write("stderr "+e+"\n")}for(var o=e("../../lib/exit"),n=process.argv[2],c=process.argv[3],f=process.argv.slice(4),d=0;d<c;d++)s(d),i(d);o(n),s("fail"),i("fail")}});