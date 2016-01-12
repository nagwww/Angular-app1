#!/usr/bin/python

import os
import boto
import sys, getopt
from boto.s3.connection import S3Connection, OrdinaryCallingFormat

#os.chdir("../")

from boto.s3.key import Key

failed = open('failed','w')
#sourceDir = sys.argv[1]
sourceDir = "./app/"
my_list = []
count=0


bucket_name = "ramaideas"

print sourceDir

def uploadfile():
        print(os.getcwd() + "\n")
	bucket = conn.get_bucket(bucket_name,validate=False)
        print bucket.name, "======", sourceDir
	k = Key(bucket)
	for path,dir,files in os.walk(sourceDir):
                print "path", path
		for file in files:
			relpath = os.path.relpath(os.path.join(path,file))
#			relpath = os.path.join(dir,file) 
			print '[-] file path     : ', relpath[4:], file
			k.key = relpath[4:]

			if relpath.endswith('.gif'):
				k.metadata.update({
	                'Cache-Control': 'max-age=86400'
	            })
				k.metadata.update({
	                'Content-Type': 'image/gif'
	            })
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
			elif relpath.endswith('.jpg'):
				k.metadata.update({
	                'Cache-Control': 'max-age=86400'
	            })
				k.metadata.update({
	                'Content-Type': 'image/jpeg'
				})
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
			elif relpath.endswith('.png'):
				k.metadata.update({
	                'Cache-Control': 'max-age=86400'
	            })
				k.metadata.update({
	                'Content-Type': 'image/png'
				})
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
			elif relpath.endswith('.js'):
				k.metadata.update({
	                'Content-Type': 'application/javascript'
	            })
				k.metadata.update({
	                'Cache-Control': 'max-age=600'
				})
			elif relpath.endswith('.css'):
				k.metadata.update({
	                'Content-Type': 'text/css'
	            })
				k.metadata.update({
	                'Cache-Control': 'max-age=43200'
				})
			elif relpath.endswith('.html'):
				k.metadata.update({
	                'Content-Type': 'text/html'
	            })
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
				k.metadata.update({
	                'Cache-Control': 'max-age=43200'
				})
			elif relpath.endswith('.json'):
				k.metadata.update({
	                'Content-Type': 'text/json'
	            })
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
				k.metadata.update({
	                'Cache-Control': 'max-age=43200'
				})

			else:
				k.metadata.update({
	                'Cache-Control': 'max-age=43200'
	            })
				k.metadata.update({
	                'Content-Encoding': 'none'
				})

			if relpath.endswith('detect.js'):
				k.metadata.update({
	                'Content-Encoding': 'none'
				})

			elif relpath.find('_noncompressed') != -1:
				k.metadata.update({
	                'Content-Encoding': 'none'
				})
                        #print relpath
			my_list.append(relpath)

			k.set_contents_from_filename(relpath)

	failed.close()
	#print my_list


if __name__ == "__main__":
	conn = boto.connect_s3(calling_format = OrdinaryCallingFormat())
	uploadfile()
