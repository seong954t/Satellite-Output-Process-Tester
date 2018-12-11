#!/bin/bash

log_path=/home/satreci/BackUpSolution/data/
dst_path=/home/satreci/BackUpSolution/BackUpDestination/
src_path=/home/satreci/BackUpSolution/BackUpSource/
backup_path=/home/satreci/BackUpSolution/incBackup/

echo "####"
echo ""

echo "Source Path is ${src_path}"
echo "Destination Path is ${dst_path}"

echo "BackupPath is ${backup_path}"

echo "Starting backup of ${src_path}"

rsync -avzh --progress --delete --backup --backup-dir=${backup_path} --suffix=".$(date +%Y%m%d%H%M%S)" ${src_path} ${dst_path} --log-file=${log_path}backupLog.log.$(date +%Y%m%d%H%M%S)

echo ""
echo "####"	
