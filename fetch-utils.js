const SUPABASE_URL = 'https://erbpltoinkxeoaylsolg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTMyOTczMiwiZXhwIjoxOTU2OTA1NzMyfQ.f1n40Mdzck2_TsyjSz36hEKFgkYcmH6DGGkjokW-6iQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirect() {
    if (await getUser()) {
        location.replace('./main');
    }
}

export async function signUpUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '/';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

//

export async function updateNature(nature) {
    const user = await getUser();
    const response = await client
        .from('city')
        .update({ nature: nature })
        .match({ user_id: user.user.id })
        .single();

    return checkError(response);
}

export async function updateArchitecture(architecture) {
    const user = await getUser();
    const response = await client
        .from('city')
        .update({ architecture: architecture })
        .match({ user_id: user.user.id })
        .single();

    return checkError(response);
}

export async function updateArt(art) {
    const user = await getUser();
    const response = await client
        .from('city')
        .update({ art: art })
        .match({ user_id: user.user.id })
        .single();

    return checkError(response);
}

export async function updateSlogans(slogans) {
    const user = await getUser();
    const response = await client
        .from('city')
        .update({ slogans: slogans })
        .match({ user_id: user.user.id })
        .single();

    return checkError(response);
}

export async function updateName(name) {
    const user = await getUser();
    const response = await client
        .from('city')
        .update({ name: name })
        .match({ user_id: user.user.id })
        .single();
    return checkError(response);
}

export async function getCity() {
    const response = await client
        .from('city')
        .select()
        .single();

    return checkError(response);
}

export async function defaultCity() {
    const response = await client
        .from('city')
        .insert([
            {
                name: 'Portland',
                nature: 1,
                architecture: 2,
                art: 3,
                slogans: [
                    'Keep it Weird'
                ]
            }
        ]);
    return checkError(response);
}