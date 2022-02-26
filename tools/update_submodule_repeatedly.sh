# updating gap in second
time_gap=6
# total running time: 6 hours (GitHub Action limitation)
time_last=`expr 359 \* 60`
time_start=$(date +%s)
time_cur=$time_start

git pull --recurse-submodules

for ((i=1; $time_cur - $time_start <= $time_last; i++))
do
    echo "[INFO]Trial $i. Running time `expr $time_cur - $time_start`"
    git submodule update --remote --recursive && git commit -am "Auto updated submodule references" && git push
    sleep $time_gap
    time_cur=$(date +%s)
done
