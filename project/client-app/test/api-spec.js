describe('GitHub API', function (){
    let target = api;   


    describe('Get user', () => {
        let user

        beforeEach(done => {
            target.getUsers('robertvera')
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should get results on search', () => {
            expect(user).not.toBeUndefined()
            expect(user.login === 'Robertvera').toBeTruthy()
        })
    })

    describe('Get repos', () => {
        let repos

        beforeEach(done => {
            target.getRepos('robertvera')
                .then(_repos => {
                    repos = _repos

                    done()
                })
                .catch(done)
        })

        it('should get results on search', () => {
            expect(repos).not.toBeUndefined()
            expect(repos.length > 0).toBeTruthy()
        })
    })

})