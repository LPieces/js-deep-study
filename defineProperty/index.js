import { data } from './data';
import { dataDefine } from "./dataDefine";
import { useStrictObject } from './defineObject';
;(()=>{

  const dataInfo = useStrictObject(data, dataDefine);
  dataInfo[0].joy = '123';

  dataInfo[2].setConfig('key', 'enumerable', true);

  dataInfo.forEach(element => {
    for(let k in element){
      console.log(k);
    }
  });
  console.log(dataInfo);
  
})();