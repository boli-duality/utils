# 将新建markdown文件添加到右键菜单中

### 第一步

在桌面新建文本文件（.txt）并打开，将如下代码粘贴进去。

> 注意：其中的 icon 一定是自己 typora 的位置。

```apl
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\.md]
@="typora.md"
"icon"="你的typora安装目录下的typora.exe文件"
[HKEY_CLASSES_ROOT\.md\OpenWithProgids]
"Typora.md"=""
"VSCode.md"=""

[HKEY_CLASSES_ROOT\.md\ShellNew]
"NullFile"=""
```

**示例：**

```apl
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\.md]
@="typora.md"
"icon"="C:\Program Files\Typora\Typora.exe"
[HKEY_CLASSES_ROOT\.md\OpenWithProgids]
"Typora.md"=""
"VSCode.md"=""

[HKEY_CLASSES_ROOT\.md\ShellNew]
"NullFile"=""
```



### 第二步

保存并退出文本，将文本 .txt 文件重命名为 .reg 文件，并双击运行。一路点击 '是' ，添加注册表。
完成后，在桌面 右键 -> 新建 就可以看见MarkDown文件了。