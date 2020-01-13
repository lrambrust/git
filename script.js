var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var repos = [];

function searchRepo() {
    var userName = inputElement.value;
    var url = 'https://api.github.com/users/'+ userName + '/repos';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            repos = JSON.parse(xhr.responseText);
        }
    }
}

function renderRepos() {
    searchRepo();

    listElement.innerHTML = '';
    var repo = repos.map(repo => repo.name);

    for (x of repo){
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(x);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }  
}

buttonElement.onclick = renderRepos;