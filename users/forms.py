from django import forms
from .models import MentorRequest


class MentorRequestForm(forms.ModelForm):
    class Meta():
        model = MentorRequest
        fields = ['message']
