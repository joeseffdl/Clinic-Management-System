import email
from urllib import request
from django.urls import path
from .views import ListTest, ListDoctorProfile, ListPatientProfile, ListQuotes, index, ListLogin



urlpatterns = [
    path('clinic/', index),
    path('test/', ListTest.as_view(), name = 'Test List'), 
   # path('post_test/', postListTest.as_view(), name = 'Post test'), 
    path('doctorprofile/', ListDoctorProfile.as_view(), name = 'Doctor Profile List'),
    path('patientprofile/', ListPatientProfile.as_view(), name = 'Patient Profile List'),
    path('quotes/', ListQuotes.as_view(), name = 'Quotes'), #baka d need
    path('login/', ListLogin.as_view(), name = 'Login Records'),



    
]