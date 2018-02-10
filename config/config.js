

var CONFIG = CONFIG || {};

CONFIG.prompt = function(cwd, user) {
   if (user)
      return '<span class="user">' + user +
          '</span>@<span class="host">https://theabhisheksingh.github.io</span>:<span class="cwd">' +
          cwd + '</span>$ ';
   return 'jsterm1.0 $ ';
};

CONFIG.username = 'abhishek';
