from django.db.models.query import QuerySet
from django.http.response import HttpResponse, HttpResponseNotAllowed
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#from rest_framework.views import ModelViewSet

from .serializers import TestSerializer, PatientProfileSerializer, DoctorProfileSerializer, QuotesSerializer, LoginSerializer
from .models import Test, PatientProfile, DoctorProfile, Quotes, Login

from django.http import JsonResponse

__all__ = ['ListTest','ListPatientProfile', 'ListDoctorProfile', 'ListQuotes','ListLogin']

def index (request):
    students = []
    '''for student in Student.objects.all():
       students.append({
           'name': student.name,
           'course': student.course,
           'rating': student.rating,
        })'''
    return JsonResponse(students , safe= False)


class ListTest(APIView):

    def get(self,request):
            listnames = Test.objects.all()
            serializer = TestSerializer(listnames, many = True)
            return Response(serializer.data)

    def post(self,request): 
        serializer = TestSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)



class ListDoctorProfile(APIView):

    def get(self,request):
            listnames_dr = DoctorProfile.objects.all()
            serializer_dr = DoctorProfileSerializer(listnames_dr, many = True)
            return Response(serializer_dr.data)

    def post(self,request): 
        serializer = DoctorProfileSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

class ListPatientProfile(APIView):

    def get(self,request):
            listnames_pt = PatientProfile.objects.all()
            serializer_pt = PatientProfileSerializer(listnames_pt, many = True)
            return Response(serializer_pt.data)

class ListQuotes(APIView):

    def get(self,request):
            listnames_qt = Quotes.objects.all()
            serializer_qt = QuotesSerializer(listnames_qt, many = True)
            return Response(serializer_qt.data)

class ListLogin(APIView):

    def get(self,request):
            listnames_dr = Login.objects.all()
            serializer_dr = LoginSerializer(listnames_dr, many = True)
            return Response(serializer_dr.data)

    def post(self,request): 
        serializer = LoginSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)




