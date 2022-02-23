git pull --recurse-submodules
while true
do
    git submodule update --remote --recursive && git commit -am "Auto updated submodule references" && git push
    sleep 6
done
