C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ touch comandos.txt main.js index.html

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ ls
comandos.txt  index.html  main.js  README.md

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git add .

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git commit -m "commit 02 de emersonAsto"
[main 2cf42d2] commit 02 de emersonAsto
 3 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 comandos.txt
 create mode 100644 index.html
 create mode 100644 main.js

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 274 bytes | 274.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/eastor112/20230605-emersonAsto.git
   9295f1c..2cf42d2  main -> main

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git log
commit 2cf42d2e6c20a08999c7802abda597536208467e (HEAD -> main, origin/main)
Author: emerson asto <emerar.mct@gmail.com>
Date:   Mon Jun 5 21:24:04 2023 -0500

    commit 02 de emersonAsto

commit 9295f1c2e4daf11bf523d882f4d5ac588f82cbfd
Author: emerson asto <emerar.mct@gmail.com>
Date:   Mon Jun 5 21:20:35 2023 -0500

    commit 01 de emersonAsto

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git co -b feature01
Switched to a new branch 'feature01'

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ mkdir Terminal Hardware

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ ls
comandos.txt  Hardware/  index.html  main.js  README.md  Terminal/

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ touch Hardware\resumen.txt Terminal\resumen.txt

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ git add .

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ git commit -m "commit 03 de emersonAsto"
[feature01 71c8639] commit 03 de emersonAsto
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Hardware/resumen.txt
 create mode 100644 Terminal/resumen.txt

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ git co -b feature02
Switched to a new branch 'feature02'

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ cat Terminal\resumen.txt

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ cat > Terminal\resumen.txt
cd
rm
touch
mkdir
ls

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ cat Terminal\resumen.txt
cd
rm
touch
mkdir
ls

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ cat > Hardware\resumen.txt
Placa madre
Memoria ram
Procesador (CPU)

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ cat Hardware\resumen.txt
Placa madre
Memoria ram
Procesador (CPU)

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ git add .

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ git commit -m "commit 04 de emersonAsto"
[feature02 d32c6d8] commit 04 de emersonAsto
 2 files changed, 8 insertions(+)

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ git push
fatal: The current branch feature02 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature02


C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02)
λ git push --set-upstream origin feature02
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 802 bytes | 401.00 KiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
remote:
remote: Create a pull request for 'feature02' on GitHub by visiting:
remote:      https://github.com/eastor112/20230605-emersonAsto/pull/new/feature02
remote:
To https://github.com/eastor112/20230605-emersonAsto.git
 * [new branch]      feature02 -> feature02
branch 'feature02' set up to track 'origin/feature02'.

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature02 -> origin)
λ git co feature01
Switched to branch 'feature01'

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ git push
fatal: The current branch feature01 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature01


C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01)
λ  git push --set-upstream origin feature01
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'feature01' on GitHub by visiting:
remote:      https://github.com/eastor112/20230605-emersonAsto/pull/new/feature01
remote:
To https://github.com/eastor112/20230605-emersonAsto.git
 * [new branch]      feature01 -> feature01
branch 'feature01' set up to track 'origin/feature01'.

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(feature01 -> origin)
λ git co main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ ls
comandos.txt  index.html  main.js  README.md

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ mv comandos.txt comandosUtilizados.tsx

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ ls
comandosUtilizados.tsx  index.html  main.js  README.md

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git log
commit 2cf42d2e6c20a08999c7802abda597536208467e (HEAD -> main, origin/main)
Author: emerson asto <emerar.mct@gmail.com>
Date:   Mon Jun 5 21:24:04 2023 -0500

    commit 02 de emersonAsto

commit 9295f1c2e4daf11bf523d882f4d5ac588f82cbfd
Author: emerson asto <emerar.mct@gmail.com>
Date:   Mon Jun 5 21:20:35 2023 -0500

    commit 01 de emersonAsto

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    comandos.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        comandosUtilizados.tsx

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git add .

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git commit -m "commit 05 de emersonAsto"

C:\Users\emera\OneDrive\Escritorio\Nueva carpeta\20230605-emersonAsto(main -> origin)
λ git push