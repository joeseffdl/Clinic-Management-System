from django.db import models
from django.db.models.base import Model
from .extras import TimeStampedModel




class Test(TimeStampedModel):

    name = models.CharField(null=True, blank=True, max_length=256)
    age = models.CharField(max_length=256, null=True)
    color = models.CharField(max_length=256, null=True)

class DoctorProfile(TimeStampedModel):
    doctorId = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=100, null = True)
    lastName = models.CharField(max_length=100, null = True)
    email = models.CharField(max_length=500, null = True)
    password = models.CharField(max_length=500, null = True)
    password_confirm = models.CharField(max_length=500, null = True)

class Login(TimeStampedModel):
    email = models.CharField(max_length=500, null = True)
    password = models.CharField(max_length=500, null = True)

class PatientProfile(TimeStampedModel):
    doctor = models.ForeignKey(DoctorProfile, on_delete= models.CASCADE)
    patientId = models.IntegerField(max_length= 10)
    firstName = models.CharField(max_length=100, null = True)
    lastName = models.CharField(max_length=100, null = True)
    email = models.CharField(max_length=500, null = True)
    password = models.CharField(max_length=500, null = True)

class Quotes(TimeStampedModel):
    quoteId = models.IntegerField(max_length= 10)
    quote = models.CharField(max_length=500, null = True)
    source = models.CharField(max_length=500, null = True)

   