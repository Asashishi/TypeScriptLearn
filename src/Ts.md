# 编译
1. 安装ts库: `npm i typescript -g`
2. 命令编译: `tsc file.ts`
3. 自动化编译: `tsc --init`
    常用配置参数: 
    target 编译后的版本
    module 生成代码的方式
    forceConsistentCasingInFileNames 强制在文件名上使用大小写一致性
    strict 启用严格的类型检查
    skipLibCheck 跳过所有 .d.ts 文件的类型检查
    outDir 编译后输出的目标地址


        
        