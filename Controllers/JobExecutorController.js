
import exec from "child_process"
import resolve from "path"

const executeJob = async (req, res) => {
    const full_path = resolve.resolve("../Dashboard/jobs/SampleJobExecutor.bat")
    console.log(full_path)
    exec.exec(full_path, (error, stdout, stderr) => {
        
        if (error) {
            res.json({
                error : `${error.message}`
            })
        }
        else if (stderr) {
            res.json({
                error : `${stderr}`
            })
        }
        else {res.json({
            message: `executed successfully !  ${stdout}`,
          });
        }
    });
};

export {
    executeJob,
};