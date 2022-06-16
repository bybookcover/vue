# 使用nanoid 自动生成id序列

```
import {nanoid} from 'nanoid'
export default {
  name: 'MyHeader',
  methods:{
    add(e){
      const todoObj = {id:nanoid(),title:e.target.value,done:false}
    }
  }
}
```



# git pull命令

etch和git pull图解 ****

常用命令：
git branch //查看本地所有分支
git branch -r //查看远程所有分支
git branch -a //查看本地和远程的所有分支
git fetch 用法
git fetch <远程主机名> //这个命令将某个远程主机的更新全部取回本地
git fetch <远程主机名> <分支名> //注意之间有空格

git pull 用法

git fetch origin master //从远程主机的master分支拉取最新内容
$ git pull <远程主机名> <远程分支名>:<本地分支名>
git merge FETCH_HEAD //将拉取下来的最新内容合并到当前所在的分支中

强制拉取远程代码：
注意此操作会覆盖本地已修改代码，请谨慎操作
git强制覆盖：

需要将这些更新取回本地，这时就要用到git fetch命令。
git fetch --all
#撤销本地、暂存区、版本库(用远程服务器的origin/master替换本地、暂存区、版本库)
git reset --hard origin/master
.#git pull来从远程仓库"同步"代码
git pull origin master
或单条执行：
git fetch --all && git reset --hard origin/master && git pull
————————————————
版权声明：本文为CSDN博主「无名氏a」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/shanlijia/article/details/119037579