import subprocess
import time
import os
jls_extract_var = "./i.sh"
os.system(jls_extract_var)
subprocess.Popen(["node", "silly.js"])
time.sleep(30)
os.system("node sil.js")
