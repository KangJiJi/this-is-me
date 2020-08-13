#!/bin/sh

HOST=""
KEY=""
USER_NAME=""
SOURCE="./"
DESTINATION="./"

while getopts "h:k:u:s:d:" opt
do
	case $opt in
		h) arg_h=$OPTARG
			HOST=$arg_h
			;;
		k) arg_k=$OPTARG
			KEY=$arg_k
			;;
		u) arg_u=$OPTARG
			USER_NAME=$arg_u
			;;
		s) arg_s=$OPTARG
			SOURCE=$arg_s
		  ;;
		d) arg_d=$OPTARG
			DESTINATION=$arg_d
			;;
		*)
			echo "Wrong parameter."
			exit 255
			;;
	esac
done

if [ "${HOST}" = "" ]; then
	echo "Please input host using -h option."
	exit 1
fi

if [ "${USER_NAME}" = "" ]; then
	echo "Please input user name using -u option."
	exit 2
fi

if [ "${KEY}" = "" ]; then
	echo "Please input key using -k option."
	exit 3
fi

echo "Start upload"

sftp -oIdentityFile="$KEY" "$USER"@"$HOST" << EOF
	lcd "${SOURCE}"
	cd "${DESTINATION}"
	put -r *
	bye
EOF
