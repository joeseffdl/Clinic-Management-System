from rest_framework import serializers
from .models import Test, PatientProfile, DoctorProfile,Quotes,Login

__all__ = ['TestSerializer', 'PatientProfileSerializer', 'DoctorProfileSerializer', 'Quotes']


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('name', 'age', 'color')

class DoctorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorProfile
        fields = ('doctorId', 'firstName', 'lastName', 'email', 'password','password_confirm')

class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientProfile
        fields = ('patientId', 'firstName', 'lastName', 'email', 'password')

        
class QuotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quotes
        fields = ('quoteID', 'quote', 'source')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('email', 'password')
