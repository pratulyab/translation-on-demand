import speech_recognition as sr
from os import path
from pydub import AudioSegment

def transcribe(filename):

	sound = AudioSegment.from_mp3(filename) 
	sound.export("sample.wav", format="wav")


	# transcribe audio file                                                         
	AUDIO_FILE = "sample.wav"

	# use the audio file as the audio source                                        
	r = sr.Recognizer()
	with sr.AudioFile(AUDIO_FILE) as source:
        	audio = r.record(source)  # read the entire audio file                  

        	return r.recognize_google(audio) #return text


                                                      

filename="sample.mp3"
a=transcribe(filename) #pass filename into transcribe() function
print(a)


