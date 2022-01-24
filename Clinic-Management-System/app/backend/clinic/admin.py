from django.contrib import admin

from .models import Quotes, Test, DoctorProfile, PatientProfile,Quotes

admin.site.register(Test),
admin.site.register(DoctorProfile),
admin.site.register(PatientProfile),
admin.site.register(Quotes),

