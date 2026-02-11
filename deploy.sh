#!/bin/bash
# GitHub Pages 自动部署脚本

set -e

echo "🚀 GitHub Pages 自动部署脚本"
echo "================================"
echo ""

# 获取用户信息
echo -n "请输入你的 GitHub 用户名: "
read USERNAME

echo -n "请输入仓库名称 (默认: qunhao-ai-journey): "
read REPO_NAME
REPO_NAME=${REPO_NAME:-qunhao-ai-journey}

echo -n "请输入你的邮箱 (用于 git 配置): "
read EMAIL

echo -n "请输入 GitHub Personal Access Token: "
read -s TOKEN
echo ""

echo ""
echo "📋 配置信息:"
echo "  用户名: $USERNAME"
echo "  仓库: $REPO_NAME"
echo "  邮箱: $EMAIL"
echo ""
echo "确认开始部署? (y/n)"
read CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo "已取消部署"
    exit 1
fi

# 配置 git
git config --global user.name "$USERNAME"
git config --global user.email "$EMAIL"

# 进入网站目录
cd /Users/qunhaolin/.openclaw/workspace-dev/qunhao-ai-website

# 初始化 git
echo "📝 初始化 Git 仓库..."
git init

# 创建 README
cat > README.md << EOF
# Qunhao AI Journey Website

Personal website showcasing 12-week AI transformation journey.

🔗 **Live Site**: https://$USERNAME.github.io/$REPO_NAME/

## Tech Stack
- HTML5
- Tailwind CSS
- Neo-Brutalism Design

## Local Development
\`\`\`bash
open index.html
\`\`\`
EOF

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Neo-Brutalism AI journey website"

# 添加远程仓库
echo "🔗 连接 GitHub 仓库..."
git remote add origin "https://$USERNAME:$TOKEN@github.com/$USERNAME/$REPO_NAME.git"

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push -u origin main || git push -u origin master

echo ""
echo "✅ 代码已推送到 GitHub!"
echo ""
echo "🌐 现在请启用 GitHub Pages:"
echo "   1. 访问: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   2. Source: Deploy from a branch"
echo "   3. Branch: main / (root)"
echo "   4. 点击 Save"
echo ""
echo "⏱️  网站将在 2-5 分钟后上线:"
echo "   https://$USERNAME.github.io/$REPO_NAME/"
echo ""
