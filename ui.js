class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card">
    <div class="row">
    <div class="col-1">
    <img class="img-fluid" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn-url">View Profile</a>
    </div>
    <div class="col-2">
    <span class="badge-primary">Public Repos:${user.public_repos}</span>
    <span class="badge-secondary">Public Gists:${user.public_gists}</span>
    <span class="badge-success">Followers:${user.followers}</span>
    <span class="badge-primary">Following:${user.following}</span>
    <br><br>
    <ul class="list-group">
    <li class="list-group-item">Company:${user.company}</li>
    <li class="list-group-item">Website/Blog:${user.blog}</li>
    <li class="list-group-item">Location:${user.location}</li>
    <li class="list-group-item">Member Since:${user.created_at}</li>
    </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach(function (repo) {
      output += `
    <div class="card">
    <div class="row">
    <div class="col3">
    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    </div>
    <div class="col3">
    <span class="badge-primary">Stars:${repo.stargazers_count}</span>
    <span class="badge-secondary">Watchers:${repo.watchers_count}</span>
    <span class="badge-success">Forks:${repo.forms_count}</span>
    </div>
    </div>
    </div>
    `;
    });

    document.getElementById('repos').innerHTML = output;
  }


  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }


  clearProfile() {
    this.profile.innerHTML = '';
  }
}