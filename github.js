class Github {
  constuctor() {
    this.client_id = '9a1a1b1ee045224a7815';
    this.client_secret = 'f67a1c766be39d53ab53809a12d62aecc55f2d73';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}


/* Client ID
9a1a1b1ee045224a7815
Client Secret
f67a1c766be39d53ab53809a12d62aecc55f2d73 */