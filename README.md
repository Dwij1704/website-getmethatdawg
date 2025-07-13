<div align="center">
  <img src="public/assets/getmethatdawg-logo.png" alt="GetMeThatDawg Logo" width="120" height="120">
  
  # getmethatdawg

  **Deploy AI agents with literally zero config**  
  *One script, one command, infinite possibilities.*

  [![GitHub](https://img.shields.io/badge/GitHub-getmethatdawg-blue?style=flat-square&logo=github)](https://github.com/Dwij1704/getmethatdawg)
  [![Twitter](https://img.shields.io/badge/Twitter-@dwijptl-1DA1F2?style=flat-square&logo=twitter)](https://x.com/dwijptl)
  [![Homebrew](https://img.shields.io/badge/Homebrew-Install-FBB040?style=flat-square&logo=homebrew)](https://brew.sh/)

</div>

---

## 🐕 What is getmethatdawg?

**getmethatdawg** is the good boy CLI tool that makes deploying AI agents as simple as calling a dog. No complex configurations, no endless setup steps, no pulling your hair out. Just write your functions, and we'll sniff out the rest like a loyal companion tracking a scent.

Perfect for developers who just want to ship their AI agents without the deployment headaches.

## ✨ Features

- **🚀 Zero Configuration**: Deploy agents with literally zero config files
- **🎯 Auto-Detection**: Automatically detects your agent functions and endpoints
- **🔧 Endpoint Decorators**: Use simple decorators to define your endpoints
- **⚡ One Command Deploy**: From code to production in seconds
- **🌐 Instant APIs**: Your functions become REST endpoints automatically
- **🔒 Pre-Auth Support**: Seamless deployment without flyctl setup
- **🎨 Beautiful UI**: Modern, responsive interface for your deployed agents

## 📦 Installation

### Homebrew (Recommended)

```bash
brew install getmethatdawg
```

*That's it! No additional setup required.*

## 🚀 Quick Start

### 1. Write Your Agent

Create a Python file with your AI agent logic:

```python
# my_agent.py
from getmethatdawg import endpoint

class MyAwesomeAgent:
    
    @endpoint("/chat")
    def chat(self, message: str) -> str:
        # Your AI logic here
        return f"Agent says: {message}"
    
    @endpoint("/analyze") 
    def analyze_data(self, data: dict) -> dict:
        # More agent functionality
        return {"analysis": "complete", "insights": data}
```

### 2. Deploy with Endpoints

```bash
getmethatdawg deploy my_agent.py
```

### 3. Or Use Auto-Detection

```bash
getmethatdawg deploy my_agent.py --auto-detect
```

### 4. Pre-Auth Deployment

```bash
getmethatdawg deploy my_agent.py --pre-auth
```

## 🎯 Use Cases

- **🤖 AI Chatbots**: Deploy conversational AI agents instantly
- **📊 Data Analysis**: Create analysis endpoints for your ML models
- **🔍 Content Processing**: Build text/image processing services
- **🎨 Creative Tools**: Deploy AI-powered creative applications
- **📈 Business Intelligence**: Create smart data insights APIs

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `getmethatdawg deploy <file>` | Deploy agent with endpoint decorators |
| `getmethatdawg deploy <file> --auto-detect` | Auto-detect functions |
| `getmethatdawg deploy <file> --pre-auth` | Deploy without flyctl setup |
| `getmethatdawg --help` | Show help information |
| `getmethatdawg --version` | Show version information |

## 🌟 Why getmethatdawg?

### The Problem
- **Complex deployment processes** that take hours to configure
- **Endless configuration files** that nobody wants to maintain
- **Deployment anxiety** that keeps you from shipping
- **Tool fatigue** from learning yet another deployment system

### The Good Boy Solution 🐕
- **One Script, One Command**: Just write functions, we handle the rest
- **Auto-Magic Detection**: We sniff out your code structure automatically
- **Zero Config Philosophy**: No YAML, no JSON, no config files
- **Developer First**: Built by developers who hate deployment friction

## 🏗️ Architecture

```
Your Python File
       ↓
getmethatdawg CLI
       ↓
Auto-Detection/Decorators
       ↓
REST API Generation
       ↓
Production Deployment
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🐛 Report Bugs**: Found a bug? [Open an issue](https://github.com/Dwij1704/getmethatdawg/issues)
2. **💡 Suggest Features**: Have an idea? We'd love to hear it
3. **📝 Improve Docs**: Help make our documentation better
4. **🔧 Submit PRs**: Code contributions are always welcome

### Development Setup

```bash
git clone https://github.com/Dwij1704/getmethatdawg.git
cd getmethatdawg
# Follow development setup instructions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐾 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/Dwij1704/getmethatdawg/issues)
- **Twitter**: [@dwijptl](https://x.com/dwijptl)
- **Website**: [getmethatdawg.com](https://getmethatdawg.com)

## 🎉 Acknowledgments

- Built with ❤️ for developers who just want to ship
- Inspired by the simplicity of calling a good dog
- Special thanks to the open-source community

---

<div align="center">
  <p>Made with ❤️ by developers who believe deployment should be as simple as calling a dog</p>
  <p>© 2025 getmethatdawg. All rights reserved.</p>
</div>
