#!/bin/bash

echo "🔧 修复推送冲突..."
echo ""

cd /Users/qunhaolin/.openclaw/workspace-dev/qunhao-ai-website

echo "📥 拉取远程内容..."
git pull origin main --allow-unrelated-histories || true

echo ""
echo "📦 重新添加文件..."
git add .

echo ""
echo "💾 提交..."
git commit -m "Update: Neo-Brutalism AI journey website" || echo "无需新提交"

echo ""
echo "📤 强制推送到 GitHub..."
git push -f origin main

echo ""
echo "✅ 推送成功！"
echo "🌐 网站地址: https://linqunhao.github.io/qunhao-ai-transformation/"
