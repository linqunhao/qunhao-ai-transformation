#!/bin/bash

echo "🔐 GitHub 身份验证方式选择:"
echo ""
echo "1) 使用 GitHub Token (推荐)"
echo "2) 使用用户名密码"
echo ""
echo -n "选择 (1 或 2): "
read CHOICE

cd /Users/qunhaolin/.openclaw/workspace-dev/qunhao-ai-website

if [ "$CHOICE" = "1" ]; then
    echo ""
    echo -n "输入 GitHub Token: "
    read -s TOKEN
    echo ""
    
    # 使用 Token 推送
    git remote remove origin 2>/dev/null
    git remote add origin https://linqunhao:$TOKEN@github.com/linqunhao/qunhao-ai-transformation.git
    
    echo "📤 正在推送..."
    git push -u origin main
    
    echo "✅ 推送成功！"
    
elif [ "$CHOICE" = "2" ]; then
    echo ""
    echo -n "输入 GitHub 用户名: "
    read USERNAME
    echo -n "输入 GitHub 密码/Token: "
    read -s PASSWORD
    echo ""
    
    git remote remove origin 2>/dev/null
    git remote add origin https://$USERNAME:$PASSWORD@github.com/linqunhao/qunhao-ai-transformation.git
    
    echo "📤 正在推送..."
    git push -u origin main
    
    echo "✅ 推送成功！"
    
else
    echo "无效选择"
    exit 1
fi

echo ""
echo "🌐 网站地址: https://linqunhao.github.io/qunhao-ai-transformation/"
