function skillsMember() {
    return {
        restrict: 'E',
        teaplateUrl: 'modules/skills/views/meaber.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vn',
        bindToController: true,
        scope: {
            member: 'm'
        }
    }
    
}