function stemWord(e){var t,s,i,p,r,l,x;if(test1=new Boolean(!0),e.length<4)return e;(i=/(.*)(\u03a6\u0391\u0393\u0399\u0391|\u03a6\u0391\u0393\u0399\u039f\u03a5|\u03a6\u0391\u0393\u0399\u03a9\u039d|\u03a3\u039a\u0391\u0393\u0399\u0391|\u03a3\u039a\u0391\u0393\u0399\u039f\u03a5|\u03a3\u039a\u0391\u0393\u0399\u03a9\u039d|\u039f\u039b\u039f\u0393\u0399\u039f\u03a5|\u039f\u039b\u039f\u0393\u0399\u0391|\u039f\u039b\u039f\u0393\u0399\u03a9\u039d|\u03a3\u039f\u0393\u0399\u039f\u03a5|\u03a3\u039f\u0393\u0399\u0391|\u03a3\u039f\u0393\u0399\u03a9\u039d|\u03a4\u0391\u03a4\u039f\u0393\u0399\u0391|\u03a4\u0391\u03a4\u039f\u0393\u0399\u039f\u03a5|\u03a4\u0391\u03a4\u039f\u0393\u0399\u03a9\u039d|\u039a\u03a1\u0395\u0391\u03a3|\u039a\u03a1\u0395\u0391\u03a4\u039f\u03a3|\u039a\u03a1\u0395\u0391\u03a4\u0391|\u039a\u03a1\u0395\u0391\u03a4\u03a9\u039d|\u03a0\u0395\u03a1\u0391\u03a3|\u03a0\u0395\u03a1\u0391\u03a4\u039f\u03a3|\u03a0\u0395\u03a1\u0391\u03a4\u0391|\u03a0\u0395\u03a1\u0391\u03a4\u03a9\u039d|\u03a4\u0395\u03a1\u0391\u03a3|\u03a4\u0395\u03a1\u0391\u03a4\u039f\u03a3|\u03a4\u0395\u03a1\u0391\u03a4\u0391|\u03a4\u0395\u03a1\u0391\u03a4\u03a9\u039d|\u03a6\u03a9\u03a3|\u03a6\u03a9\u03a4\u039f\u03a3|\u03a6\u03a9\u03a4\u0391|\u03a6\u03a9\u03a4\u03a9\u039d|\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a3|\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u039f\u03a3|\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u0391|\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u03a9\u039d|\u0393\u0395\u0393\u039f\u039d\u039f\u03a3|\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u039f\u03a3|\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u0391|\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u03a9\u039d)$/).test(e)&&(t=(x=i.exec(e))[1],s=x[2],e=t+step1list[s],test1=!1);(i=/^(.+?)(\u0391\u0394\u0395\u03a3|\u0391\u0394\u03a9\u039d)$/).test(e)&&(e=t=(x=i.exec(e))[1],reg1=/(\u039f\u039a|\u039c\u0391\u039c|\u039c\u0391\u039d|\u039c\u03a0\u0391\u039c\u03a0|\u03a0\u0391\u03a4\u0395\u03a1|\u0393\u0399\u0391\u0393\u0399|\u039d\u03a4\u0391\u039d\u03a4|\u039a\u03a5\u03a1|\u0398\u0395\u0399|\u03a0\u0395\u0398\u0395\u03a1)$/,reg1.test(e)||(e+="\u0391\u0394"));(p=/^(.+?)(\u0395\u0394\u0395\u03a3|\u0395\u0394\u03a9\u039d)$/).test(e)&&(e=t=(x=p.exec(e))[1],exept2=/(\u039f\u03a0|\u0399\u03a0|\u0395\u039c\u03a0|\u03a5\u03a0|\u0393\u0397\u03a0|\u0394\u0391\u03a0|\u039a\u03a1\u0391\u03a3\u03a0|\u039c\u0399\u039b)$/,exept2.test(e)&&(e+="\u0395\u0394"));(r=/^(.+?)(\u039f\u03a5\u0394\u0395\u03a3|\u039f\u03a5\u0394\u03a9\u039d)$/).test(e)&&(e=t=(x=r.exec(e))[1],exept3=/(\u0391\u03a1\u039a|\u039a\u0391\u039b\u0399\u0391\u039a|\u03a0\u0395\u03a4\u0391\u039b|\u039b\u0399\u03a7|\u03a0\u039b\u0395\u039e|\u03a3\u039a|\u03a3|\u03a6\u039b|\u03a6\u03a1|\u0392\u0395\u039b|\u039b\u039f\u03a5\u039b|\u03a7\u039d|\u03a3\u03a0|\u03a4\u03a1\u0391\u0393|\u03a6\u0395)$/,exept3.test(e)&&(e+="\u039f\u03a5\u0394"));(l=/^(.+?)(\u0395\u03a9\u03a3|\u0395\u03a9\u039d)$/).test(e)&&(e=t=(x=l.exec(e))[1],test1=!1,exept4=/^(\u0398|\u0394|\u0395\u039b|\u0393\u0391\u039b|\u039d|\u03a0|\u0399\u0394|\u03a0\u0391\u03a1)$/,exept4.test(e)&&(e+="\u0395"));(i=/^(.+?)(\u0399\u0391|\u0399\u039f\u03a5|\u0399\u03a9\u039d)$/).test(e)&&(e=t=(x=i.exec(e))[1],p=new RegExp(v+"$"),test1=!1,p.test(e)&&(e=t+"\u0399"));(i=/^(.+?)(\u0399\u039a\u0391|\u0399\u039a\u039f|\u0399\u039a\u039f\u03a5|\u0399\u039a\u03a9\u039d)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,p=new RegExp(v+"$"),exept5=/^(\u0391\u039b|\u0391\u0394|\u0395\u039d\u0394|\u0391\u039c\u0391\u039d|\u0391\u039c\u039c\u039f\u03a7\u0391\u039b|\u0397\u0398|\u0391\u039d\u0397\u0398|\u0391\u039d\u03a4\u0399\u0394|\u03a6\u03a5\u03a3|\u0392\u03a1\u03a9\u039c|\u0393\u0395\u03a1|\u0395\u039e\u03a9\u0394|\u039a\u0391\u039b\u03a0|\u039a\u0391\u039b\u039b\u0399\u039d|\u039a\u0391\u03a4\u0391\u0394|\u039c\u039f\u03a5\u039b|\u039c\u03a0\u0391\u039d|\u039c\u03a0\u0391\u0393\u0399\u0391\u03a4|\u039c\u03a0\u039f\u039b|\u039c\u03a0\u039f\u03a3|\u039d\u0399\u03a4|\u039e\u0399\u039a|\u03a3\u03a5\u039d\u039f\u039c\u0397\u039b|\u03a0\u0395\u03a4\u03a3|\u03a0\u0399\u03a4\u03a3|\u03a0\u0399\u039a\u0391\u039d\u03a4|\u03a0\u039b\u0399\u0391\u03a4\u03a3|\u03a0\u039f\u03a3\u03a4\u0395\u039b\u039d|\u03a0\u03a1\u03a9\u03a4\u039f\u0394|\u03a3\u0395\u03a1\u03a4|\u03a3\u03a5\u039d\u0391\u0394|\u03a4\u03a3\u0391\u039c|\u03a5\u03a0\u039f\u0394|\u03a6\u0399\u039b\u039f\u039d|\u03a6\u03a5\u039b\u039f\u0394|\u03a7\u0391\u03a3)$/,(exept5.test(e)||p.test(e))&&(e+="\u0399\u039a"));(i=/^(.+?)(\u0391\u039c\u0395)$/,"\u0391\u0393\u0391\u039c\u0395"==e&&(e="\u0391\u0393\u0391\u039c"),(p=/^(.+?)(\u0391\u0393\u0391\u039c\u0395|\u0397\u03a3\u0391\u039c\u0395|\u039f\u03a5\u03a3\u0391\u039c\u0395|\u0397\u039a\u0391\u039c\u0395|\u0397\u0398\u0397\u039a\u0391\u039c\u0395)$/).test(e))&&(e=t=(x=p.exec(e))[1],test1=!1);i.test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept6=/^(\u0391\u039d\u0391\u03a0|\u0391\u03a0\u039f\u0398|\u0391\u03a0\u039f\u039a|\u0391\u03a0\u039f\u03a3\u03a4|\u0392\u039f\u03a5\u0392|\u039e\u0395\u0398|\u039f\u03a5\u039b|\u03a0\u0395\u0398|\u03a0\u0399\u039a\u03a1|\u03a0\u039f\u03a4|\u03a3\u0399\u03a7|\u03a7)$/,exept6.test(e)&&(e+="\u0391\u039c"));(p=/^(.+?)(\u0391\u039d\u0395)$/,(r=/^(.+?)(\u0391\u0393\u0391\u039d\u0395|\u0397\u03a3\u0391\u039d\u0395|\u039f\u03a5\u03a3\u0391\u039d\u0395|\u0399\u039f\u039d\u03a4\u0391\u039d\u0395|\u0399\u039f\u03a4\u0391\u039d\u0395|\u0399\u039f\u03a5\u039d\u03a4\u0391\u039d\u0395|\u039f\u039d\u03a4\u0391\u039d\u0395|\u039f\u03a4\u0391\u039d\u0395|\u039f\u03a5\u039d\u03a4\u0391\u039d\u0395|\u0397\u039a\u0391\u039d\u0395|\u0397\u0398\u0397\u039a\u0391\u039d\u0395)$/).test(e))&&(e=t=(x=r.exec(e))[1],test1=!1,(r=/^(\u03a4\u03a1|\u03a4\u03a3)$/).test(e)&&(e+="\u0391\u0393\u0391\u039d"));p.test(e)&&(e=t=(x=p.exec(e))[1],test1=!1,p=new RegExp(v2+"$"),exept7=/^(\u0392\u0395\u03a4\u0395\u03a1|\u0392\u039f\u03a5\u039b\u039a|\u0392\u03a1\u0391\u03a7\u039c|\u0393|\u0394\u03a1\u0391\u0394\u039f\u03a5\u039c|\u0398|\u039a\u0391\u039b\u03a0\u039f\u03a5\u0396|\u039a\u0391\u03a3\u03a4\u0395\u039b|\u039a\u039f\u03a1\u039c\u039f\u03a1|\u039b\u0391\u039f\u03a0\u039b|\u039c\u03a9\u0391\u039c\u0395\u0398|\u039c|\u039c\u039f\u03a5\u03a3\u039f\u03a5\u039b\u039c|\u039d|\u039f\u03a5\u039b|\u03a0|\u03a0\u0395\u039b\u0395\u039a|\u03a0\u039b|\u03a0\u039f\u039b\u0399\u03a3|\u03a0\u039f\u03a1\u03a4\u039f\u039b|\u03a3\u0391\u03a1\u0391\u039a\u0391\u03a4\u03a3|\u03a3\u039f\u03a5\u039b\u03a4|\u03a4\u03a3\u0391\u03a1\u039b\u0391\u03a4|\u039f\u03a1\u03a6|\u03a4\u03a3\u0399\u0393\u0393|\u03a4\u03a3\u039f\u03a0|\u03a6\u03a9\u03a4\u039f\u03a3\u03a4\u0395\u03a6|\u03a7|\u03a8\u03a5\u03a7\u039f\u03a0\u039b|\u0391\u0393|\u039f\u03a1\u03a6|\u0393\u0391\u039b|\u0393\u0395\u03a1|\u0394\u0395\u039a|\u0394\u0399\u03a0\u039b|\u0391\u039c\u0395\u03a1\u0399\u039a\u0391\u039d|\u039f\u03a5\u03a1|\u03a0\u0399\u0398|\u03a0\u039f\u03a5\u03a1\u0399\u03a4|\u03a3|\u0396\u03a9\u039d\u03a4|\u0399\u039a|\u039a\u0391\u03a3\u03a4|\u039a\u039f\u03a0|\u039b\u0399\u03a7|\u039b\u039f\u03a5\u0398\u0397\u03a1|\u039c\u0391\u0399\u039d\u03a4|\u039c\u0395\u039b|\u03a3\u0399\u0393|\u03a3\u03a0|\u03a3\u03a4\u0395\u0393|\u03a4\u03a1\u0391\u0393|\u03a4\u03a3\u0391\u0393|\u03a6|\u0395\u03a1|\u0391\u0394\u0391\u03a0|\u0391\u0398\u0399\u0393\u0393|\u0391\u039c\u0397\u03a7|\u0391\u039d\u0399\u039a|\u0391\u039d\u039f\u03a1\u0393|\u0391\u03a0\u0397\u0393|\u0391\u03a0\u0399\u0398|\u0391\u03a4\u03a3\u0399\u0393\u0393|\u0392\u0391\u03a3|\u0392\u0391\u03a3\u039a|\u0392\u0391\u0398\u03a5\u0393\u0391\u039b|\u0392\u0399\u039f\u039c\u0397\u03a7|\u0392\u03a1\u0391\u03a7\u03a5\u039a|\u0394\u0399\u0391\u03a4|\u0394\u0399\u0391\u03a6|\u0395\u039d\u039f\u03a1\u0393|\u0398\u03a5\u03a3|\u039a\u0391\u03a0\u039d\u039f\u0392\u0399\u039f\u039c\u0397\u03a7|\u039a\u0391\u03a4\u0391\u0393\u0391\u039b|\u039a\u039b\u0399\u0392|\u039a\u039f\u0399\u039b\u0391\u03a1\u03a6|\u039b\u0399\u0392|\u039c\u0395\u0393\u039b\u039f\u0392\u0399\u039f\u039c\u0397\u03a7|\u039c\u0399\u039a\u03a1\u039f\u0392\u0399\u039f\u039c\u0397\u03a7|\u039d\u03a4\u0391\u0392|\u039e\u0397\u03a1\u039f\u039a\u039b\u0399\u0392|\u039f\u039b\u0399\u0393\u039f\u0394\u0391\u039c|\u039f\u039b\u039f\u0393\u0391\u039b|\u03a0\u0395\u039d\u03a4\u0391\u03a1\u03a6|\u03a0\u0395\u03a1\u0397\u03a6|\u03a0\u0395\u03a1\u0399\u03a4\u03a1|\u03a0\u039b\u0391\u03a4|\u03a0\u039f\u039b\u03a5\u0394\u0391\u03a0|\u03a0\u039f\u039b\u03a5\u039c\u0397\u03a7|\u03a3\u03a4\u0395\u03a6|\u03a4\u0391\u0392|\u03a4\u0395\u03a4|\u03a5\u03a0\u0395\u03a1\u0397\u03a6|\u03a5\u03a0\u039f\u039a\u039f\u03a0|\u03a7\u0391\u039c\u0397\u039b\u039f\u0394\u0391\u03a0|\u03a8\u0397\u039b\u039f\u03a4\u0391\u0392)$/,(p.test(e)||exept7.test(e))&&(e+="\u0391\u039d"));(r=/^(.+?)(\u0395\u03a4\u0395)$/,(l=/^(.+?)(\u0397\u03a3\u0395\u03a4\u0395)$/).test(e))&&(e=t=(x=l.exec(e))[1],test1=!1);r.test(e)&&(e=t=(x=r.exec(e))[1],test1=!1,r=new RegExp(v2+"$"),exept8=/(\u039f\u0394|\u0391\u0399\u03a1|\u03a6\u039f\u03a1|\u03a4\u0391\u0398|\u0394\u0399\u0391\u0398|\u03a3\u03a7|\u0395\u039d\u0394|\u0395\u03a5\u03a1|\u03a4\u0399\u0398|\u03a5\u03a0\u0395\u03a1\u0398|\u03a1\u0391\u0398|\u0395\u039d\u0398|\u03a1\u039f\u0398|\u03a3\u0398|\u03a0\u03a5\u03a1|\u0391\u0399\u039d|\u03a3\u03a5\u039d\u0394|\u03a3\u03a5\u039d|\u03a3\u03a5\u039d\u0398|\u03a7\u03a9\u03a1|\u03a0\u039f\u039d|\u0392\u03a1|\u039a\u0391\u0398|\u0395\u03a5\u0398|\u0395\u039a\u0398|\u039d\u0395\u03a4|\u03a1\u039f\u039d|\u0391\u03a1\u039a|\u0392\u0391\u03a1|\u0392\u039f\u039b|\u03a9\u03a6\u0395\u039b)$/,exept9=/^(\u0391\u0392\u0391\u03a1|\u0392\u0395\u039d|\u0395\u039d\u0391\u03a1|\u0391\u0392\u03a1|\u0391\u0394|\u0391\u0398|\u0391\u039d|\u0391\u03a0\u039b|\u0392\u0391\u03a1\u039f\u039d|\u039d\u03a4\u03a1|\u03a3\u039a|\u039a\u039f\u03a0|\u039c\u03a0\u039f\u03a1|\u039d\u0399\u03a6|\u03a0\u0391\u0393|\u03a0\u0391\u03a1\u0391\u039a\u0391\u039b|\u03a3\u0395\u03a1\u03a0|\u03a3\u039a\u0395\u039b|\u03a3\u03a5\u03a1\u03a6|\u03a4\u039f\u039a|\u03a5|\u0394|\u0395\u039c|\u0398\u0391\u03a1\u03a1|\u0398)$/,(r.test(e)||exept8.test(e)||exept9.test(e))&&(e+="\u0395\u03a4"));(i=/^(.+?)(\u039f\u039d\u03a4\u0391\u03a3|\u03a9\u039d\u03a4\u0391\u03a3)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept10=/^(\u0391\u03a1\u03a7)$/,exept11=/(\u039a\u03a1\u0395)$/,exept10.test(e)&&(e+="\u039f\u039d\u03a4"),exept11.test(e)&&(e+="\u03a9\u039d\u03a4"));(i=/^(.+?)(\u039f\u039c\u0391\u03a3\u03a4\u0395|\u0399\u039f\u039c\u0391\u03a3\u03a4\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept11=/^(\u039f\u039d)$/,exept11.test(e)&&(e+="\u039f\u039c\u0391\u03a3\u03a4"));(i=/^(.+?)(\u0395\u03a3\u03a4\u0395)$/,(p=/^(.+?)(\u0399\u0395\u03a3\u03a4\u0395)$/).test(e))&&(e=t=(x=p.exec(e))[1],test1=!1,(p=/^(\u03a0|\u0391\u03a0|\u03a3\u03a5\u039c\u03a0|\u0391\u03a3\u03a5\u039c\u03a0|\u0391\u039a\u0391\u03a4\u0391\u03a0|\u0391\u039c\u0395\u03a4\u0391\u039c\u03a6)$/).test(e)&&(e+="\u0399\u0395\u03a3\u03a4"));i.test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept12=/^(\u0391\u039b|\u0391\u03a1|\u0395\u039a\u03a4\u0395\u039b|\u0396|\u039c|\u039e|\u03a0\u0391\u03a1\u0391\u039a\u0391\u039b|\u0391\u03a1|\u03a0\u03a1\u039f|\u039d\u0399\u03a3)$/,exept12.test(e)&&(e+="\u0395\u03a3\u03a4"));(i=/^(.+?)(\u0397\u039a\u0391|\u0397\u039a\u0395\u03a3|\u0397\u039a\u0395)$/,(p=/^(.+?)(\u0397\u0398\u0397\u039a\u0391|\u0397\u0398\u0397\u039a\u0395\u03a3|\u0397\u0398\u0397\u039a\u0395)$/).test(e))&&(e=t=(x=p.exec(e))[1],test1=!1);i.test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept13=/(\u03a3\u039a\u03a9\u039b|\u03a3\u039a\u039f\u03a5\u039b|\u039d\u0391\u03a1\u0398|\u03a3\u03a6|\u039f\u0398|\u03a0\u0399\u0398)$/,exept14=/^(\u0394\u0399\u0391\u0398|\u0398|\u03a0\u0391\u03a1\u0391\u039a\u0391\u03a4\u0391\u0398|\u03a0\u03a1\u039f\u03a3\u0398|\u03a3\u03a5\u039d\u0398|)$/,(exept13.test(e)||exept14.test(e))&&(e+="\u0397\u039a"));(i=/^(.+?)(\u039f\u03a5\u03a3\u0391|\u039f\u03a5\u03a3\u0395\u03a3|\u039f\u03a5\u03a3\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept15=/^(\u03a6\u0391\u03a1\u039c\u0391\u039a|\u03a7\u0391\u0394|\u0391\u0393\u039a|\u0391\u039d\u0391\u03a1\u03a1|\u0392\u03a1\u039f\u039c|\u0395\u039a\u039b\u0399\u03a0|\u039b\u0391\u039c\u03a0\u0399\u0394|\u039b\u0395\u03a7|\u039c|\u03a0\u0391\u03a4|\u03a1|\u039b|\u039c\u0395\u0394|\u039c\u0395\u03a3\u0391\u0396|\u03a5\u03a0\u039f\u03a4\u0395\u0399\u039d|\u0391\u039c|\u0391\u0399\u0398|\u0391\u039d\u0397\u039a|\u0394\u0395\u03a3\u03a0\u039f\u0396|\u0395\u039d\u0394\u0399\u0391\u03a6\u0395\u03a1|\u0394\u0395|\u0394\u0395\u03a5\u03a4\u0395\u03a1\u0395\u03a5|\u039a\u0391\u0398\u0391\u03a1\u0395\u03a5|\u03a0\u039b\u0395|\u03a4\u03a3\u0391)$/,exept16=/(\u03a0\u039f\u0394\u0391\u03a1|\u0392\u039b\u0395\u03a0|\u03a0\u0391\u039d\u03a4\u0391\u03a7|\u03a6\u03a1\u03a5\u0394|\u039c\u0391\u039d\u03a4\u0399\u039b|\u039c\u0391\u039b\u039b|\u039a\u03a5\u039c\u0391\u03a4|\u039b\u0391\u03a7|\u039b\u0397\u0393|\u03a6\u0391\u0393|\u039f\u039c|\u03a0\u03a1\u03a9\u03a4)$/,(exept15.test(e)||exept16.test(e))&&(e+="\u039f\u03a5\u03a3"));(i=/^(.+?)(\u0391\u0393\u0391|\u0391\u0393\u0395\u03a3|\u0391\u0393\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept17=/^(\u03a8\u039f\u03a6|\u039d\u0391\u03a5\u039b\u039f\u03a7)$/,exept20=/(\u039a\u039f\u039b\u039b)$/,exept18=/^(\u0391\u0392\u0391\u03a3\u03a4|\u03a0\u039f\u039b\u03a5\u03a6|\u0391\u0394\u0397\u03a6|\u03a0\u0391\u039c\u03a6|\u03a1|\u0391\u03a3\u03a0|\u0391\u03a6|\u0391\u039c\u0391\u039b|\u0391\u039c\u0391\u039b\u039b\u0399|\u0391\u039d\u03a5\u03a3\u03a4|\u0391\u03a0\u0395\u03a1|\u0391\u03a3\u03a0\u0391\u03a1|\u0391\u03a7\u0391\u03a1|\u0394\u0395\u03a1\u0392\u0395\u039d|\u0394\u03a1\u039f\u03a3\u039f\u03a0|\u039e\u0395\u03a6|\u039d\u0395\u039f\u03a0|\u039d\u039f\u039c\u039f\u03a4|\u039f\u039b\u039f\u03a0|\u039f\u039c\u039f\u03a4|\u03a0\u03a1\u039f\u03a3\u03a4|\u03a0\u03a1\u039f\u03a3\u03a9\u03a0\u039f\u03a0|\u03a3\u03a5\u039c\u03a0|\u03a3\u03a5\u039d\u03a4|\u03a4|\u03a5\u03a0\u039f\u03a4|\u03a7\u0391\u03a1|\u0391\u0395\u0399\u03a0|\u0391\u0399\u039c\u039f\u03a3\u03a4|\u0391\u039d\u03a5\u03a0|\u0391\u03a0\u039f\u03a4|\u0391\u03a1\u03a4\u0399\u03a0|\u0394\u0399\u0391\u03a4|\u0395\u039d|\u0395\u03a0\u0399\u03a4|\u039a\u03a1\u039f\u039a\u0391\u039b\u039f\u03a0|\u03a3\u0399\u0394\u0397\u03a1\u039f\u03a0|\u039b|\u039d\u0391\u03a5|\u039f\u03a5\u039b\u0391\u039c|\u039f\u03a5\u03a1|\u03a0|\u03a4\u03a1|\u039c)$/,exept19=/(\u039f\u03a6|\u03a0\u0395\u039b|\u03a7\u039f\u03a1\u03a4|\u039b\u039b|\u03a3\u03a6|\u03a1\u03a0|\u03a6\u03a1|\u03a0\u03a1|\u039b\u039f\u03a7|\u03a3\u039c\u0397\u039d)$/,!exept18.test(e)&&!exept19.test(e)||exept17.test(e)||exept20.test(e)||(e+="\u0391\u0393"));(i=/^(.+?)(\u0397\u03a3\u0395|\u0397\u03a3\u039f\u03a5|\u0397\u03a3\u0391)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept21=/^(\u039d|\u03a7\u0395\u03a1\u03a3\u039f\u039d|\u0394\u03a9\u0394\u0395\u039a\u0391\u039d|\u0395\u03a1\u0397\u039c\u039f\u039d|\u039c\u0395\u0393\u0391\u039b\u039f\u039d|\u0395\u03a0\u03a4\u0391\u039d)$/,exept21.test(e)&&(e+="\u0397\u03a3"));(i=/^(.+?)(\u0397\u03a3\u03a4\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept22=/^(\u0391\u03a3\u0392|\u03a3\u0392|\u0391\u03a7\u03a1|\u03a7\u03a1|\u0391\u03a0\u039b|\u0391\u0395\u0399\u039c\u039d|\u0394\u03a5\u03a3\u03a7\u03a1|\u0395\u03a5\u03a7\u03a1|\u039a\u039f\u0399\u039d\u039f\u03a7\u03a1|\u03a0\u0391\u039b\u0399\u039c\u03a8)$/,exept22.test(e)&&(e+="\u0397\u03a3\u03a4"));(i=/^(.+?)(\u039f\u03a5\u039d\u0395|\u0397\u03a3\u039f\u03a5\u039d\u0395|\u0397\u0398\u039f\u03a5\u039d\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept23=/^(\u039d|\u03a1|\u03a3\u03a0\u0399|\u03a3\u03a4\u03a1\u0391\u0392\u039f\u039c\u039f\u03a5\u03a4\u03a3|\u039a\u0391\u039a\u039f\u039c\u039f\u03a5\u03a4\u03a3|\u0395\u039e\u03a9\u039d)$/,exept23.test(e)&&(e+="\u039f\u03a5\u039d"));(i=/^(.+?)(\u039f\u03a5\u039c\u0395|\u0397\u03a3\u039f\u03a5\u039c\u0395|\u0397\u0398\u039f\u03a5\u039c\u0395)$/).test(e)&&(e=t=(x=i.exec(e))[1],test1=!1,exept24=/^(\u03a0\u0391\u03a1\u0391\u03a3\u039f\u03a5\u03a3|\u03a6|\u03a7|\u03a9\u03a1\u0399\u039f\u03a0\u039b|\u0391\u0396|\u0391\u039b\u039b\u039f\u03a3\u039f\u03a5\u03a3|\u0391\u03a3\u039f\u03a5\u03a3)$/,exept24.test(e)&&(e+="\u039f\u03a5\u039c"));(p=/^(.+?)(\u0391|\u0391\u0393\u0391\u03a4\u0395|\u0391\u0393\u0391\u039d|\u0391\u0395\u0399|\u0391\u039c\u0391\u0399|\u0391\u039d|\u0391\u03a3|\u0391\u03a3\u0391\u0399|\u0391\u03a4\u0391\u0399|\u0391\u03a9|\u0395|\u0395\u0399|\u0395\u0399\u03a3|\u0395\u0399\u03a4\u0395|\u0395\u03a3\u0391\u0399|\u0395\u03a3|\u0395\u03a4\u0391\u0399|\u0399|\u0399\u0395\u039c\u0391\u0399|\u0399\u0395\u039c\u0391\u03a3\u03a4\u0395|\u0399\u0395\u03a4\u0391\u0399|\u0399\u0395\u03a3\u0391\u0399|\u0399\u0395\u03a3\u0391\u03a3\u03a4\u0395|\u0399\u039f\u039c\u0391\u03a3\u03a4\u0391\u039d|\u0399\u039f\u039c\u039f\u03a5\u039d|\u0399\u039f\u039c\u039f\u03a5\u039d\u0391|\u0399\u039f\u039d\u03a4\u0391\u039d|\u0399\u039f\u039d\u03a4\u039f\u03a5\u03a3\u0391\u039d|\u0399\u039f\u03a3\u0391\u03a3\u03a4\u0391\u039d|\u0399\u039f\u03a3\u0391\u03a3\u03a4\u0395|\u0399\u039f\u03a3\u039f\u03a5\u039d|\u0399\u039f\u03a3\u039f\u03a5\u039d\u0391|\u0399\u039f\u03a4\u0391\u039d|\u0399\u039f\u03a5\u039c\u0391|\u0399\u039f\u03a5\u039c\u0391\u03a3\u03a4\u0395|\u0399\u039f\u03a5\u039d\u03a4\u0391\u0399|\u0399\u039f\u03a5\u039d\u03a4\u0391\u039d|\u0397|\u0397\u0394\u0395\u03a3|\u0397\u0394\u03a9\u039d|\u0397\u0398\u0395\u0399|\u0397\u0398\u0395\u0399\u03a3|\u0397\u0398\u0395\u0399\u03a4\u0395|\u0397\u0398\u0397\u039a\u0391\u03a4\u0395|\u0397\u0398\u0397\u039a\u0391\u039d|\u0397\u0398\u039f\u03a5\u039d|\u0397\u0398\u03a9|\u0397\u039a\u0391\u03a4\u0395|\u0397\u039a\u0391\u039d|\u0397\u03a3|\u0397\u03a3\u0391\u039d|\u0397\u03a3\u0391\u03a4\u0395|\u0397\u03a3\u0395\u0399|\u0397\u03a3\u0395\u03a3|\u0397\u03a3\u039f\u03a5\u039d|\u0397\u03a3\u03a9|\u039f|\u039f\u0399|\u039f\u039c\u0391\u0399|\u039f\u039c\u0391\u03a3\u03a4\u0391\u039d|\u039f\u039c\u039f\u03a5\u039d|\u039f\u039c\u039f\u03a5\u039d\u0391|\u039f\u039d\u03a4\u0391\u0399|\u039f\u039d\u03a4\u0391\u039d|\u039f\u039d\u03a4\u039f\u03a5\u03a3\u0391\u039d|\u039f\u03a3|\u039f\u03a3\u0391\u03a3\u03a4\u0391\u039d|\u039f\u03a3\u0391\u03a3\u03a4\u0395|\u039f\u03a3\u039f\u03a5\u039d|\u039f\u03a3\u039f\u03a5\u039d\u0391|\u039f\u03a4\u0391\u039d|\u039f\u03a5|\u039f\u03a5\u039c\u0391\u0399|\u039f\u03a5\u039c\u0391\u03a3\u03a4\u0395|\u039f\u03a5\u039d|\u039f\u03a5\u039d\u03a4\u0391\u0399|\u039f\u03a5\u039d\u03a4\u0391\u039d|\u039f\u03a5\u03a3|\u039f\u03a5\u03a3\u0391\u039d|\u039f\u03a5\u03a3\u0391\u03a4\u0395|\u03a5|\u03a5\u03a3|\u03a9|\u03a9\u039d)$/,(i=/^(.+?)(\u039c\u0391\u03a4\u0391|\u039c\u0391\u03a4\u03a9\u039d|\u039c\u0391\u03a4\u039f\u03a3)$/).test(e))&&(e=(t=(x=i.exec(e))[1])+"\u039c\u0391");p.test(e)&&test1&&(e=t=(x=p.exec(e))[1]);(i=/^(.+?)(\u0395\u03a3\u03a4\u0395\u03a1|\u0395\u03a3\u03a4\u0391\u03a4|\u039f\u03a4\u0395\u03a1|\u039f\u03a4\u0391\u03a4|\u03a5\u03a4\u0395\u03a1|\u03a5\u03a4\u0391\u03a4|\u03a9\u03a4\u0395\u03a1|\u03a9\u03a4\u0391\u03a4)$/).test(e)&&(e=t=(x=i.exec(e))[1]);return e}step1list=new Array,step1list["\u03a6\u0391\u0393\u0399\u0391"]="\u03a6\u0391",step1list["\u03a6\u0391\u0393\u0399\u039f\u03a5"]="\u03a6\u0391",step1list["\u03a6\u0391\u0393\u0399\u03a9\u039d"]="\u03a6\u0391",step1list["\u03a3\u039a\u0391\u0393\u0399\u0391"]="\u03a3\u039a\u0391",step1list["\u03a3\u039a\u0391\u0393\u0399\u039f\u03a5"]="\u03a3\u039a\u0391",step1list["\u03a3\u039a\u0391\u0393\u0399\u03a9\u039d"]="\u03a3\u039a\u0391",step1list["\u039f\u039b\u039f\u0393\u0399\u039f\u03a5"]="\u039f\u039b\u039f",step1list["\u039f\u039b\u039f\u0393\u0399\u0391"]="\u039f\u039b\u039f",step1list["\u039f\u039b\u039f\u0393\u0399\u03a9\u039d"]="\u039f\u039b\u039f",step1list["\u03a3\u039f\u0393\u0399\u039f\u03a5"]="\u03a3\u039f",step1list["\u03a3\u039f\u0393\u0399\u0391"]="\u03a3\u039f",step1list["\u03a3\u039f\u0393\u0399\u03a9\u039d"]="\u03a3\u039f",step1list["\u03a4\u0391\u03a4\u039f\u0393\u0399\u0391"]="\u03a4\u0391\u03a4\u039f",step1list["\u03a4\u0391\u03a4\u039f\u0393\u0399\u039f\u03a5"]="\u03a4\u0391\u03a4\u039f",step1list["\u03a4\u0391\u03a4\u039f\u0393\u0399\u03a9\u039d"]="\u03a4\u0391\u03a4\u039f",step1list["\u039a\u03a1\u0395\u0391\u03a3"]="\u039a\u03a1\u0395",step1list["\u039a\u03a1\u0395\u0391\u03a4\u039f\u03a3"]="\u039a\u03a1\u0395",step1list["\u039a\u03a1\u0395\u0391\u03a4\u0391"]="\u039a\u03a1\u0395",step1list["\u039a\u03a1\u0395\u0391\u03a4\u03a9\u039d"]="\u039a\u03a1\u0395",step1list["\u03a0\u0395\u03a1\u0391\u03a3"]="\u03a0\u0395\u03a1",step1list["\u03a0\u0395\u03a1\u0391\u03a4\u039f\u03a3"]="\u03a0\u0395\u03a1",step1list["\u03a0\u0395\u03a1\u0391\u03a4\u0391"]="\u03a0\u0395\u03a1",step1list["\u03a0\u0395\u03a1\u0391\u03a4\u03a9\u039d"]="\u03a0\u0395\u03a1",step1list["\u03a4\u0395\u03a1\u0391\u03a3"]="\u03a4\u0395\u03a1",step1list["\u03a4\u0395\u03a1\u0391\u03a4\u039f\u03a3"]="\u03a4\u0395\u03a1",step1list["\u03a4\u0395\u03a1\u0391\u03a4\u0391"]="\u03a4\u0395\u03a1",step1list["\u03a4\u0395\u03a1\u0391\u03a4\u03a9\u039d"]="\u03a4\u0395\u03a1",step1list["\u03a6\u03a9\u03a3"]="\u03a6\u03a9",step1list["\u03a6\u03a9\u03a4\u039f\u03a3"]="\u03a6\u03a9",step1list["\u03a6\u03a9\u03a4\u0391"]="\u03a6\u03a9",step1list["\u03a6\u03a9\u03a4\u03a9\u039d"]="\u03a6\u03a9",step1list["\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a3"]="\u039a\u0391\u0398\u0395\u03a3\u03a4",step1list["\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u039f\u03a3"]="\u039a\u0391\u0398\u0395\u03a3\u03a4",step1list["\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u0391"]="\u039a\u0391\u0398\u0395\u03a3\u03a4",step1list["\u039a\u0391\u0398\u0395\u03a3\u03a4\u03a9\u03a4\u03a9\u039d"]="\u039a\u0391\u0398\u0395\u03a3\u03a4",step1list["\u0393\u0395\u0393\u039f\u039d\u039f\u03a3"]="\u0393\u0395\u0393\u039f\u039d",step1list["\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u039f\u03a3"]="\u0393\u0395\u0393\u039f\u039d",step1list["\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u0391"]="\u0393\u0395\u0393\u039f\u039d",step1list["\u0393\u0395\u0393\u039f\u039d\u039f\u03a4\u03a9\u039d"]="\u0393\u0395\u0393\u039f\u039d",v="[\u0391\u0395\u0397\u0399\u039f\u03a5\u03a9]",v2="[\u0391\u0395\u0397\u0399\u039f\u03a9]";var greekStemmer=function(e){return e.update(function(e){return stemWord(e)})},idx=lunr(function(){for(var e in this.field("title"),this.field("excerpt"),this.field("categories"),this.field("tags"),this.ref("id"),this.pipeline.remove(lunr.trimmer),this.pipeline.add(greekStemmer),this.pipeline.remove(lunr.stemmer),store)this.add({title:store[e].title,excerpt:store[e].excerpt,categories:store[e].categories,tags:store[e].tags,id:e})});$(document).ready(function(){$("input#search").on("keyup",function(){var e=$("#results"),s=$(this).val().toLowerCase(),t=idx.query(function(t){s.split(lunr.tokenizer.separator).forEach(function(e){t.term(e,{boost:100}),s.lastIndexOf(" ")!=s.length-1&&t.term(e,{usePipeline:!1,wildcard:lunr.Query.wildcard.TRAILING,boost:10}),""!=e&&t.term(e,{usePipeline:!1,editDistance:1,boost:1})})});for(var i in e.empty(),e.prepend('<p class="results__found">'+t.length+" Result(s) found</p>"),t){var p=t[i].ref;if(store[p].teaser)var r='<div class="list__item"><article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork"><h2 class="archive__item-title" itemprop="headline"><a href="'+store[p].url+'" rel="permalink">'+store[p].title+'</a></h2><div class="archive__item-teaser"><img src="'+store[p].teaser+'" alt=""></div><p class="archive__item-excerpt" itemprop="description">'+store[p].excerpt.split(" ").splice(0,20).join(" ")+"...</p></article></div>";else r='<div class="list__item"><article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork"><h2 class="archive__item-title" itemprop="headline"><a href="'+store[p].url+'" rel="permalink">'+store[p].title+'</a></h2><p class="archive__item-excerpt" itemprop="description">'+store[p].excerpt.split(" ").splice(0,20).join(" ")+"...</p></article></div>";e.append(r)}})});