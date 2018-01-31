from django.contrib import admin
from .models import CustomUser, Skill, MentorRequest, Relationship, Project

admin.site.register(CustomUser)
admin.site.register(Skill)
admin.site.register(MentorRequest)
admin.site.register(Relationship)
admin.site.register(Project)
