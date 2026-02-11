#!/bin/bash
# 更新现有 GitHub 仓库

echo "🚀 更新现有仓库: qunhao-ai-transformation"
echo "=========================================="
echo ""

# 进入目录
cd /Users/qunhaolin/.openclaw/workspace-dev/qunhao-ai-website

# 初始化 git（如果还没初始化）
if [ ! -d ".git" ]; then
    echo "📝 初始化 Git..."
    git init
fi

# 配置 git（如果需要）
if [ -z "$(git config user.name)" ]; then
    echo -n "输入你的 GitHub 用户名: "
    read USERNAME
    git config user.name "$USERNAME"
fi

if [ -z "$(git config user.email)" ]; then
    echo -n "输入你的邮箱: "
    read EMAIL
    git config user.email "$EMAIL"
fi

# 添加所有文件
echo "📦 添加文件..."
git add .

# 提交
echo "💾 提交更改..."
git commit -m "Update: Neo-Brutalism AI journey website - $(date '+%Y-%m-%d')"

# 添加远程仓库
echo "🔗 连接远程仓库..."
git remote add origin https://github.com/linqunhao/qunhao-ai-transformation.git 2>/dev/null || echo "远程仓库已存在"

# 拉取现有内容（防止冲突）
echo "📥 同步远程内容..."
git pull origin main --allow-unrelated-histories 2>/dev/null || echo "无需同步"

# 推送
echo "📤 推送到 GitHub..."
git push -u origin main

echo ""
echo "✅ 更新完成！"
echo ""
echo "🌐 网站地址: https://linqunhao.github.io/qunhao-ai-transformation/"
echo ""
echo "如果 GitHub Pages 还没启用:"
echo "  1. 访问 https://github.com/linqunhao/qunhao-ai-transformation/settings/pages"
echo "  2. Branch: main → / (root)"
echo "  3. 点击 Save"
