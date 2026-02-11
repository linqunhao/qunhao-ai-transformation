#!/bin/bash
# GitHub Pages 部署脚本

echo "🚀 开始部署到 GitHub Pages..."

# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Neo-Brutalism AI journey website"

# 4. 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
# git remote add origin https://github.com/YOUR_USERNAME/qunhao-ai-journey.git

echo ""
echo "✅ 本地仓库已创建！"
echo ""
echo "下一步："
echo "1. 在 GitHub 创建仓库: https://github.com/new"
echo "2. 运行: git remote add origin https://github.com/你的用户名/qunhao-ai-journey.git"
echo "3. 运行: git push -u origin main"
echo ""
echo "然后启用 GitHub Pages:"
echo "- 进入仓库 → Settings → Pages"
echo "- Branch: main → / (root)"
echo "- 点击 Save"
echo ""
echo "网站将在几分钟后上线: https://你的用户名.github.io/qunhao-ai-journey/"
