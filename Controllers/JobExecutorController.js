import exec from "child_process";
import resolve from "path";
import fs from 'fs';

const executeJob = async (req, res) => {
  
  const full_path = resolve.resolve("../Dashboard/jobs/SampleJobExecutor.bat");
  console.log(full_path);
  exec.exec(full_path, (error, stdout, stderr) => {
    if (error) {
      res.json({
        error: `${error.message}`,
      });
    } else if (stderr) {
      res.json({
        error: `${stderr}`,
      });
    } else {
      res.json({
        message: `executed successfully !  ${stdout}`,
      });
    }
  });
};


const executeJobs =  (req, res) => {
  var featureFilesArray = req.body.featureFiles;
  console.log(featureFilesArray[0]);
  var epochTime = Math.round(Date.now() / 1000);
  var batchFilePath =  resolve.resolve("../Dashboard/jobs/JobExecutor"+"_"+epochTime+".bat");
  console.log(batchFilePath);

  var batchFileData = "@echo off \n" 
  +"setlocal"+"\n"
  +"cd /d %~dp0"+"\n";
  for(var i=0; i<featureFilesArray.length; i++){
    batchFileData += "java -jar "+featureFilesArray[i]+".jar"+"\n"
  }

  fs.writeFile(batchFilePath, batchFileData , function (err) {
    if (err) throw err;
    console.log('Batch File saved for execution!');
  });

  exec.exec(batchFilePath, (error, stdout, stderr) => {
    if (error) {
      res.json({
        error: `${error.message}`,
      });
    } else if (stderr) {
      res.json({
        error: `${stderr}`,
      });
    } else {
      res.json({
        message: `executed successfully !  ${stdout}`,
      });
    }
  });

};

export { executeJob, executeJobs };
