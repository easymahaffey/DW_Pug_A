const current_members = {
  "member_total_count": 0,
  "member_total_state_count": 0,
  "member_total_private_count": 0,
  "member_total_public_count": 0,
  "member_total_active_count": 0,
  "member_total_inactive_count": 0,
  "member_dreamweaver_count": 0,
  "member_server_count": 0,
  "member_only_count": 0,
  "member_project_manager_count": 0,
  "member_site_manager_count": 0,
  "max_total_members": 0,
  "max_state_members": 0,
  "exceeds_max_members": false,
  "exceeds_max_state_members": false,
}

const current_admins = {
  "admin_total_count": 0,
  "admin_total_programmer_count": 0,
  "admin_total_local_admin_count": 0,
  "max_total_admins": 0,
  "max_state_admins": 0,
  "exceeds_max_admins": false,
  "exceeds_max_state_admins": false,
}

const current_vendors = {
  "vendor_total_count": 0,
  "vendor_total_private_count": 0,
  "vendor_total_public_count": 0,
  "vendor_total_active_count": 0,
  "vendor_total_inactive_count": 0,
  "max_total_vendors": 0,
  "max_state_vendors": 0,
  "exceeds_max_vendors": false,
  "exceeds_max_state_vendors": false,
}

const current_projects = {
  "project_total_count": 0,
  "project_state_count": 0,
  "max_total_projects": 0,
  "max_state_projects": 0,
  "exceeds_max_projects": false,
  "exceeds_max_state_projects": false,
}

const current_dreams = {
  "dream_total_count": 0,
  "dream_total_completed_count": 0,
  "dream_total_uncompleted_count": 0,
  "dream_state_count": 0,
  "dream_state_completed_count": 0,
  "dream_state_uncompleted_count": 0,
  "max_total_dreams": 0,
  "max_state_dreams": 0,
  "exceeds_max_dreams": false,
  "exceeds_max_state_dreams": false,
}

const seedSiteStats = [
  {
    "member_total_count": 0,
    "member_total_private_count": 0,
    "member_total_public_count": 0,
    "member_total_active_count": 0,
    "member_total_inactive_count": 0,
    "member_dreamweaver_count": 0,
    "member_server_count": 0,
    "member_only_count": 0,
    "member_project_manager_count": 0,
    "member_site_manager_count": 0,
    "max_total_members": 0,
    "max_state_members": 0,
    "exceeds_max_members": false,
    "exceeds_max_state_members": false,
    "admin_total_count": 0,
    "admin_total_programmer_count": 0,
    "admin_total_local_admin_count": 0,
    "max_total_admins": 0,
    "max_state_admins": 0,
    "exceeds_max_admins": false,
    "exceeds_max_state_admins": false,
    "vendor_total_count": 0,
    "vendor_total_private_count": 0,
    "vendor_total_public_count": 0,
    "vendor_total_active_count": 0,
    "vendor_total_inactive_count": 0,
    "max_total_vendors": 0,
    "max_state_vendors": 0,
    "exceeds_max_vendors": false,
    "exceeds_max_state_vendors": false,
    "project_total_count": 0,
    "project_state_count": 0,
    "max_total_projects": 0,
    "max_state_projects": 0,
    "exceeds_max_projects": false,
    "exceeds_max_state_projects": false,
    "dream_total_count": 0,
    "dream_total_completed_count": 0,
    "dream_total_uncompleted_count": 0,
    "dream_state_count": 0,
    "dream_state_completed_count": 0,
    "dream_state_uncompleted_count": 0,
    "max_total_dreams": 0,
    "max_state_dreams": 0,
    "exceeds_max_dreams": false,
    "exceeds_max_state_dreams": false,
  }
]

const seedSiteStats2 = [
  {
    "member_total_count": 0,
    "member_total_private_count": 0,
    "member_total_public_count": 0,
    "member_total_active_count": 0,
    "member_total_inactive_count": 0,
    "member_dreamweaver_count": 0,
    "member_server_count": 0,
    "member_only_count": 0,
    "member_project_manager_count": 0,
    "member_site_manager_count": 0,
    "max_total_members": 0,
    "max_state_members": 0,
    "exceeds_max_members": false,
    "exceeds_max_state_members": false,
  },
  {
    "admin_total_count": 0,
    "admin_total_programmer_count": 0,
    "admin_total_local_admin_count": 0,
    "max_total_admins": 0,
    "max_state_admins": 0,
    "exceeds_max_admins": false,
    "exceeds_max_state_admins": false,
  },
  {
    "vendor_total_count": 0,
    "vendor_total_private_count": 0,
    "vendor_total_public_count": 0,
    "vendor_total_active_count": 0,
    "vendor_total_inactive_count": 0,
    "max_total_vendors": 0,
    "max_state_vendors": 0,
    "exceeds_max_vendors": false,
    "exceeds_max_state_vendors": false,
  },
  {
    "project_total_count": 0,
    "project_state_count": 0,
    "max_total_projects": 0,
    "max_state_projects": 0,
    "exceeds_max_projects": false,
    "exceeds_max_state_projects": false,
  },
  {
    "dream_total_count": 0,
    "dream_total_completed_count": 0,
    "dream_total_uncompleted_count": 0,
    "dream_state_count": 0,
    "dream_state_completed_count": 0,
    "dream_state_uncompleted_count": 0,
    "max_total_dreams": 0,
    "max_state_dreams": 0,
    "exceeds_max_dreams": false,
    "exceeds_max_state_dreams": false,
  }
]

const seedSiteStats1 = [
  {
    "current_members": {
      "member_total_count": 0,
      "member_total_private_count": 0,
      "member_total_public_count": 0,
      "member_total_active_count": 0,
      "member_total_inactive_count": 0,
      "member_dreamweaver_count": 0,
      "member_server_count": 0,
      "member_only_count": 0,
      "member_project_manager_count": 0,
      "member_site_manager_count": 0,
      "max_total_members": 0,
      "max_state_members": 0,
      "exceeds_max_members": false,
      "exceeds_max_state_members": false,
    }
  },
  {
    "current_admins": {
      "admin_total_count": 0,
      "admin_total_programmer_count": 0,
      "admin_total_local_admin_count": 0,
      "max_total_admins": 0,
      "max_state_admins": 0,
      "exceeds_max_admins": false,
      "exceeds_max_state_admins": false,
    }
  },
  {
    "current_vendors": {
      "vendor_total_count": 0,
      "vendor_total_private_count": 0,
      "vendor_total_public_count": 0,
      "vendor_total_active_count": 0,
      "vendor_total_inactive_count": 0,
      "max_total_vendors": 0,
      "max_state_vendors": 0,
      "exceeds_max_vendors": false,
      "exceeds_max_state_vendors": false,
    }
  },
  {
    "current_projects": {
      "project_total_count": 0,
      "project_state_count": 0,
      "max_total_projects": 0,
      "max_state_projects": 0,
      "exceeds_max_projects": false,
      "exceeds_max_state_projects": false,
    }
  },
  {
    "current_dreams": {
      "dream_total_count": 0,
      "dream_total_completed_count": 0,
      "dream_total_uncompleted_count": 0,
      "dream_state_count": 0,
      "dream_state_completed_count": 0,
      "dream_state_uncompleted_count": 0,
      "max_total_dreams": 0,
      "max_state_dreams": 0,
      "exceeds_max_dreams": false,
      "exceeds_max_state_dreams": false,
    }
  }
]

module.exports = seedSiteStats