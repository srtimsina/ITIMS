import itims.secure.*

class BootStrap {

    def init = { servletContext ->
        def admin = User.findByUsername('admin') ?: new User(username: 'admin', password: 'admin').save(flush: true)
        def role = Role.findByAuthority("ROLE_ADMIN") ?: new Role(authority: "ROLE_ADMIN").save(flush: true)
        if (!UserRole.findByUserAndRole(admin, role)) {
            UserRole.create(admin, role, true)
        }
        def user = User.findByUsername('admin1') ?: new User(username: 'admin1', password: 'admin1').save(flush: true)
        def role_user = Role.findByAuthority("ROLE_USER") ?: new Role(authority: "ROLE_USER").save(flush: true)
        if (!UserRole.findByUserAndRole(user, role_user)) {
            UserRole.create(user, role_user, true)
        }
        String appPath = servletContext.getRealPath("")
        if(!new File(appPath+"/files").exists()){
            new File(appPath+"/files").mkdir()
        }
    }
    def destroy = {
    }
}
