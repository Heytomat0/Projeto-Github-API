const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    events: '',
    message: '',
    forks:'',
    stargazers:'',
    watchers:'',
    language:'',
    






    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.forks = repositories.forks_count
        this.stargazers = repositories.stargazers_count
        this.watchers = repositories.watchers_count
        this.language = repositories.language

    },
    async setEvents(events) {
        this.events = events
        this.message = await events.message
        
    }
}


export { user }