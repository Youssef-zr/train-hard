
#! /usr/bin/env python3
import json
import sys
import zlib
 
import base45
import cbor2

def DecodeHealthPass(payload):
  # The HC1: prefix nust be removed before decoding.
  s = payload.replace("HC1:", "")
 
  # decode Base45
  b45payload = base45.b45decode(s)
 
  # decompress using zlib
  cbordata = zlib.decompress(b45payload)
 
  # load the CBOR structure
  decoded = cbor2.loads(cbordata)
  decoded_qrcode = cbor2.loads(decoded.value[2])
 
  # prepare the CBOR structure in a readable way (newlines are added). 
  decoded_qrcode_str = print.pformat(decoded_qrcode)
  return decoded_qrcode_str