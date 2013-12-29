Prism.languages.insertBefore('php', 'keyword', {
  'class-extension': {
    pattern: /((?:(?:extends|implements)\s+))[a-z0-9_\.\\]+/ig,
    lookbehind: true,
    inside: {
      punctuation: /(\.|\\)/
    }
  },
  'punctuation2': {
    pattern: /(->|\:\:)/g
  },
  'markup': {
    pattern: /a^/g,
    inside: Prism.languages.markup
  }
});

Prism.languages.insertBefore('php', 'punctuation', {
  'comment': {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
    lookbehind: true,
    inside: {
      'dockblock': {
        pattern: /\s\@[\w]+/g
      }
    }
  },
  'boolean': /\b(true|false|null)\b/g,
  'keyword': /\b(and|or|xor|array|as|break|case|cfunction|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|for|foreach|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|static|throw|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b/ig,
  'keyword2': /\b(class|function|parent)\b/ig,
  'function': {
    pattern: /\s[a-z0-9_]+\(/ig,
    inside: {
      punctuation: /\(/
    }
  },
  'class-name': {
    pattern: /((?:(?:class|interface|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,
    lookbehind: true,
    inside: {
      punctuation: /(\.|\\)/
    }
  }
});

Prism.languages.insertBefore('php', 'package', {
  'scope': {
    pattern: /\b[\w\\]+::/g,
    inside: {
      keyword: /(static|self|parent)/,
      punctuation: /(\\)/,
      punctuation2: /(::)/
    }
  }
});
