import uuid

def generate_sample_scenarios():
    samples = []
    samples.append({'id':str(uuid.uuid4()),'domain':'cyber','level':1,'question':'You find a USB stick on the floor. What do you do?','options':['Plug it into your workstation','Report to IT','Throw it away','Ignore it'],'correct_index':1,'topic':'removable_media','difficulty':1})
    samples.append({'id':str(uuid.uuid4()),'domain':'cyber','level':2,'question':'A suspicious email asks for credentials. What is best practice?','options':['Reply with details','Click link to verify','Report to SOC','Forward to colleagues'],'correct_index':2,'topic':'phishing','difficulty':2})
    samples.append({'id':str(uuid.uuid4()),'domain':'posh','level':1,'question':'A colleague shares inappropriate joke. You should:','options':['Laugh along','Report HR','Share more','Ignore'],'correct_index':1,'topic':'harassment','difficulty':1})
    samples.append({'id':str(uuid.uuid4()),'domain':'business','level':3,'question':'Critical system failure — who to notify first?','options':['Team lead','Social media','Client','Ignore'],'correct_index':0,'topic':'incident_response','difficulty':3})
    return samples

def parse_document_and_generate_scenarios(text):
    # Placeholder: split into sentences and create simple Q/A
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    out = []
    for i,l in enumerate(lines[:10]):
        out.append({'id':str(uuid.uuid4()),'domain':'cyber','level':1,'question':f'From doc: {l[:80]}... What is correct?','options':['Option A','Option B','Option C','Option D'],'correct_index':0,'topic':'generated','difficulty':1})
    return out
